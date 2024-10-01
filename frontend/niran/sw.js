self.addEventListener('push', function(event) {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: 'icon.png',  // Coloque o caminho para o ícone da notificação
    badge: 'badge.png' // Coloque o caminho para o badge da notificação
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
