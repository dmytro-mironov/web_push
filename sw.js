self.addEventListener('push', (e) => {
    console.log(ev.data.json())
    self.registration.showNotification('Hello world!', {});
});