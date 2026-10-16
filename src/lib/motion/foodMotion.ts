import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Context, TweenVars } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const parallaxQuery = '(min-width: 769px) and (hover: hover) and (prefers-reduced-motion: no-preference)';

function storyReveal(scope: HTMLElement) {
  scope.querySelectorAll<HTMLElement>('[data-motion-story]').forEach((story) => {
    const steps = Array.from(story.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement && element.hasAttribute('data-motion-step'),
    );
    if (!steps.length) return;

    gsap.fromTo(
      steps,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.085,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: story, start: 'top 86%', once: true },
      },
    );
  });
}

function batchReveal(
  scope: HTMLElement,
  selector: string,
  fromVars: TweenVars,
  toVars: TweenVars,
  trackAnimation: (animation: { kill: () => void }) => void,
) {
  const targets = Array.from(scope.querySelectorAll<HTMLElement>(selector)).filter((element) => !element.hidden);
  if (!targets.length) return;

  ScrollTrigger.batch(targets, {
    start: 'top 88%',
    once: true,
    interval: 0.08,
    batchMax: 8,
    onEnter: (batch) => {
      const animation = gsap.fromTo(batch, fromVars, { ...toVars, stagger: { each: 0.055, from: 'start' }, overwrite: 'auto' });
      trackAnimation(animation);
    },
  });
}

function staggerReveal(scope: HTMLElement) {
  scope.querySelectorAll<HTMLElement>('[data-motion-stagger]').forEach((group) => {
    const items = Array.from(group.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement && element.hasAttribute('data-motion-item'),
    );
    if (!items.length) return;

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.56,
        stagger: 0.08,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: group, start: 'top 88%', once: true },
      },
    );
  });
}

function photoParallax(scope: HTMLElement) {
  scope.querySelectorAll<HTMLElement>('[data-motion-parallax]').forEach((image) => {
    if (image.hidden) return;
    gsap.fromTo(
      image,
      { yPercent: 1.5 },
      {
        yPercent: -1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: image.parentElement ?? image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.7,
        },
      },
    );
  });
}

function buildScope(scope: HTMLElement) {
  const batchAnimations: Array<{ kill: () => void }> = [];
  const context: Context = gsap.context(() => {
    storyReveal(scope);
    staggerReveal(scope);
    batchReveal(scope, '[data-motion-text]', { autoAlpha: 0, y: 24 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.68,
      ease: 'power2.out',
      immediateRender: false,
    }, (animation) => batchAnimations.push(animation));
    batchReveal(scope, '[data-motion-image]:not([data-motion-parallax])', { autoAlpha: 0.72, y: 12, scale: 1.055 }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.95,
      ease: 'power2.out',
      immediateRender: false,
    }, (animation) => batchAnimations.push(animation));
    batchReveal(scope, '[data-motion-image][data-motion-parallax]', { autoAlpha: 0.72, y: 12, scale: 1.055 }, {
      autoAlpha: 1,
      y: 0,
      scale: 1.045,
      duration: 0.95,
      ease: 'power2.out',
      immediateRender: false,
    }, (animation) => batchAnimations.push(animation));
  }, scope);

  const parallax = gsap.matchMedia(scope);
  parallax.add(parallaxQuery, () => photoParallax(scope));

  return () => {
    batchAnimations.forEach((animation) => animation.kill());
    context.revert();
    parallax.revert();
  };
}

/** Initializes opt-in motion inside marked menu components. Content stays visible until each trigger enters. */
export function installFoodMotion() {
  let cleanups: Array<() => void> = [];
  let stopped = false;
  const media = window.matchMedia(reducedMotionQuery);

  const clear = () => {
    cleanups.forEach((cleanup) => cleanup());
    cleanups = [];
  };

  const mount = () => {
    clear();
    if (stopped || media.matches) return;
    document.querySelectorAll<HTMLElement>('[data-food-motion-scope]').forEach((scope) => {
      cleanups.push(buildScope(scope));
    });
  };

  const onPreferenceChange = () => mount();
  const onBeforeSwap = () => clear();
  const onPageLoad = () => mount();
  const dispose = () => {
    stopped = true;
    clear();
    media.removeEventListener('change', onPreferenceChange);
    document.removeEventListener('astro:before-swap', onBeforeSwap);
    document.removeEventListener('astro:page-load', onPageLoad);
  };

  media.addEventListener('change', onPreferenceChange);
  document.addEventListener('astro:before-swap', onBeforeSwap);
  document.addEventListener('astro:page-load', onPageLoad);
  mount();
  return dispose;
}
