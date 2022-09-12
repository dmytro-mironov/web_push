self.addEventListener('push', (ev) => {
    console.log(ev.data.json())
    self.registration.showNotification('Hello world!', {});
});