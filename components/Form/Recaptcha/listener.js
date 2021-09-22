const InitListener = (callback) => {
  if (typeof callback !== 'function' || window.recaptchaCloseListener) {
    return;
  }

  window.recaptchaCloseListener = true;
  HTMLCollection.prototype.find = Array.prototype.find;

  const recaptchaWindow = document
    .getElementsByTagName('iframe')
    .find((x) => x.src.includes('google.com/recaptcha/api2/bframe'))
    .parentNode.parentNode;

  recaptchaWindow.classList.add('!transition-none');
  const observer = new MutationObserver(() => {
    const { style } = recaptchaWindow;
    if (style.visibility === 'hidden' && style.opacity === '0') {
      callback();
    }
  });

  observer.observe(recaptchaWindow, {
    attributes: true,
    attributeFilter: ['style'],
  });
};

export default InitListener;
