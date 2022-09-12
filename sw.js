self.addEventListener('push', () => {
    console.dir('1')
    self.registration.showNotification('Hello world!', {});
});