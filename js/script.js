document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.popup-img');

  // Crear el contenedor del popup si no existe
  let popup = document.createElement('div');
  popup.id = 'popup-container';
  popup.style.position = 'fixed';
  popup.style.top = 0;
  popup.style.left = 0;
  popup.style.width = '100vw';
  popup.style.height = '100vh';
  popup.style.backgroundColor = 'rgba(0,0,0,0.8)';
  popup.style.display = 'none';
  popup.style.alignItems = 'center';
  popup.style.justifyContent = 'center';
  popup.style.zIndex = 9999;

  const popupImg = document.createElement('img');
  popupImg.style.maxWidth = '90%';
  popupImg.style.maxHeight = '90%';
  popup.appendChild(popupImg);

  document.body.appendChild(popup);

  images.forEach(img => {
    img.addEventListener('click', function () {
      popupImg.src = this.src;
      popup.style.display = 'flex';
    });
  });

  popup.addEventListener('click', function () {
    popup.style.display = 'none';
    popupImg.src = '';
  });
});
