self.addEventListener('push', (e) => {
    console.log(e)
    self.registration.showNotification('Hello world!', {});
});