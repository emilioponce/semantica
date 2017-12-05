export default function register() {

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    //@TODO sw.js needs to be in the same folder as index.html (public). Solution?
    navigator.serviceWorker.register('sw.js').then(function(swReg) {
      console.log('Service Worker is registered', swReg);
    }).catch(function(error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
