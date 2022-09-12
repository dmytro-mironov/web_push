self.addEventListener('push', (ev) => {
    console.log(ev)
    self.registration.showNotification('Hello world!', {});
});