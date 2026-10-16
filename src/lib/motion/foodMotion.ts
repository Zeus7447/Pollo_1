import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Context } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const parallaxQuery = '(min-width: 769px) and (hover: hover) and (prefers-reduced-motion: no-preference)';

function buildScope(scope: HTMLElement) {
  const context: Context = gsap.context(() => {
    scope.querySelectorAll<HTMLElement>('[data-motion="section"]').forEach((section) => {
      const ownedTargets = (selector: string) => Array.from(section.querySelectorAll<HTMLElement>(selector))
        .filter((target) => target.closest('[data-motion="section"]') === section);
      const title = ownedTargets('[data-motion="title"]');
      const description = ownedTargets('[data-motion="description"]');
      const images = ownedTargets('[data-motion="image"]');
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          once: true,
        },
      });

      if (title.length) {
        timeline.fromTo(title, { autoAlpha: 0, y: 25 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power2.out',
          immediateRender: false,
        }, 0);
      }

      if (images.length) {
        timeline.fromTo(images, { autoAlpha: 0, scale: 1.04 }, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.06,
          ease: 'power2.out',
          immediateRender: false,
        }, 0.12);
      }

      if (description.length) {
        timeline.fromTo(description, { autoAlpha: 0, y: 12 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.48,
          stagger: 0.04,
          ease: 'power2.out',
          immediateRender: false,
        }, 0.28);
      }
    });
  }, scope);

  // The home page hero owns a dynamically re-created pinned ScrollTrigger when
  // it switches between desktop and mobile frame sequences. Registering extra
  // scrub triggers while that pin refreshes can leave GSAP's trigger list in an
  // incomplete state. Keep image parallax for standalone scopes only.
  const parallax = gsap.matchMedia(scope);
  if (!document.querySelector('[data-scroll-canvas]')) {
    parallax.add(parallaxQuery, () => {
      scope.querySelectorAll<HTMLElement>('[data-motion="parallax"]').forEach((media) => {
        gsap.fromTo(media, { y: 20 }, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: media,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      });
    });
  }

  return () => {
    context.revert();
    parallax.revert();
  };
}

/** Initializes marked commercial sections and releases all GSAP contexts on route swaps. */
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
