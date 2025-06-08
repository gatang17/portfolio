
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.popup-img');
  let currentIndex = 0;

  // Crear el contenedor del popup
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
  popupImg.style.transition = '0.3s ease';
  popup.appendChild(popupImg);

  // Botón anterior
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '⟵';
  prevBtn.style.position = 'absolute';
  prevBtn.style.left = '20px';
  prevBtn.style.top = '50%';
  prevBtn.style.transform = 'translateY(-50%)';
  prevBtn.style.fontSize = '2rem';
  prevBtn.style.color = 'white';
  prevBtn.style.background = 'none';
  prevBtn.style.border = 'none';
  prevBtn.style.cursor = 'pointer';
  popup.appendChild(prevBtn);

  // Botón siguiente
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '⟶';
  nextBtn.style.position = 'absolute';
  nextBtn.style.right = '20px';
  nextBtn.style.top = '50%';
  nextBtn.style.transform = 'translateY(-50%)';
  nextBtn.style.fontSize = '2rem';
  nextBtn.style.color = 'white';
  nextBtn.style.background = 'none';
  nextBtn.style.border = 'none';
  nextBtn.style.cursor = 'pointer';
  popup.appendChild(nextBtn);

  document.body.appendChild(popup);

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      popupImg.src = images[index].src;
      currentIndex = index;
    }
  }

  images.forEach((img, index) => {
    img.addEventListener('click', function () {
      showImage(index);
      popup.style.display = 'flex';
    });
  });

  // Cerrar popup al hacer clic fuera de la imagen
  popup.addEventListener('click', function (e) {
    if (e.target === popup || e.target === popupImg) {
      popup.style.display = 'none';
      popupImg.src = '';
    }
  });

  // Navegación
  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    showImage((currentIndex - 1 + images.length) % images.length);
  });

  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    showImage((currentIndex + 1) % images.length);
  });

  // Navegación con teclado
  document.addEventListener('keydown', function (e) {
    if (popup.style.display === 'flex') {
      if (e.key === 'ArrowLeft') {
        showImage((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        showImage((currentIndex + 1) % images.length);
      } else if (e.key === 'Escape') {
        popup.style.display = 'none';
        popupImg.src = '';
      }
    }
  });
});
// menus top
document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header class="row justify-content-between align-items-start">
      <!-- Logo -->
      <div class="col-9 col-md-6 container_logo"> 
        <div class="sec_logoP" id="logoH">
          <!-- Aquí va tu logo -->
        </div>
      </div>
      
      <!-- Menú horizontal -->
      <div class="col-6 d-none d-lg-flex">
        <div class="row w-100 justify-content-center">
          <div class="col-auto  ">
            <a class="active-link p_h2" href="index.html">home</a>
          </div>
          <div class="col-auto  ">
            <a class="active-link p_h2" href="project.html">projects</a>
          </div>
          <div class="col-auto  ">
           <a class="active-link p_h2" href="experience.html">expertise</a>
          </div>
          <div class="col-auto  ">
           <a class="active-link p_h2" href="aboutme.html">about me</a>
          </div>
          <div class="col-auto ">
          <a class="active-link p_h2" href="contact.html">contact</a>
          </div>
        </div>
      </div>
    
      <!-- Menú hamburguesa (solo en pantallas pequeñas) -->
      <div class="col-3 d-flex align-items-center justify-content-end d-block d-lg-none">
        <nav class="navbar">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon btn_menu"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                  <span class="navbar-toggler-icon btn_menu2"></span>
                </button>
              </div>
              <div class="offcanvas-body" style="dysplay=block;">
               
                
                    <a class="active-link p_h_m" href="index.html">home</a>
                    <a class="active-link p_h_m " href="project.html">project</a>
                    <a class="active-link p_h_m"  href="experience.html">expertise</a>
                    <a class="active-link p_h_m" href="aboutme.html">about me</a>
                    <a class=" active-link p_h_m" href="contact.html">contact</a>
             
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `
  
  ;

  // Insertar el header en el contenedor
  const container = document.getElementById('header-container');
  if (container) {
    container.innerHTML = headerHTML;
  }
});

// menus footer
document.addEventListener('DOMContentLoaded', () => {
  const footerHTML = `
   <footer class="container-fluid row container_foot justify-content-center align-items-center">
  <div class="col-12 col-md-2 cont_footer">
      <a class="active-link p_h" href="index.html">home</a>
      
  </div>
  <div class="col-12 col-md-2 cont_footer">
     <a class="active-link p_h" href="project.html">projects</a>
  </div>
  <div class="col-12 col-md-2 cont_footer"> 
    <a class="active-link p_h" href="experience.html">expertise</a>
 </div>
  <div class="col-12 col-md-2 cont_footer">
     <a class="active-link p_h" href="aboutme.html">about_me</a>
  </div>
  <div class="col-12 col-md-2 cont_footer">
   <a class="active-link p_h" href="contact.html">contact</a>

</div>
 
</footer>
  `
  
  ;

  // Insertar el header en el contenedor
  const container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = footerHTML;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('link_logoV');
  
  if (link) {
    // Cambia el cursor a pointer
    link.style.cursor = 'pointer';

    // Redirige al hacer clic
    link.addEventListener('click', () => {
      window.location.href = 'aboutme.html'; // cambia esto por tu página real
    });
  }
});

document.addEventListener('DOMContentLoaded',()=>{
  const link_home = document.getElementById('logoH');
  
  if (link_home) {
    link_home.style.cursor = 'pointer';
    link_home.addEventListener('click',()=>{
      window,location.href = 'index.html';
    });
  }

});




document.addEventListener("DOMContentLoaded", function() {
  // Mostrar el formulario
  document.getElementById("open-form").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el link recargue la página
    document.getElementById("popup-form").classList.remove("popup-hidden");
  });

  // Cerrar el formulario
  document.getElementById("close-form").addEventListener("click", function() {
    document.getElementById("popup-form").classList.add("popup-hidden");
  });
});








