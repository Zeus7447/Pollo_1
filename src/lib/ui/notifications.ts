let dismissTimer = 0;
let removeTimer = 0;

function getToast(): HTMLDivElement {
  let toast = document.querySelector<HTMLDivElement>('[data-ui-toast]');
  if (toast) return toast;

  toast = document.createElement('div');
  toast.className = 'ui-toast';
  toast.dataset.uiToast = '';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.setAttribute('aria-atomic', 'true');
  document.body.append(toast);
  return toast;
}

/** A small, accessible confirmation for successful cart actions. */
export function showToast(message: string) {
  const toast = getToast();
  window.clearTimeout(dismissTimer);
  window.clearTimeout(removeTimer);
  toast.textContent = message;
  toast.classList.remove('is-visible');
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  dismissTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
  removeTimer = window.setTimeout(() => toast.remove(), 3000);
}
