document.addEventListener('DOMContentLoaded', function() {
    console.log('El script galeria.js se ha cargado');
    
    const galleryContainer = document.getElementById('gallery-container');
    console.log('Contenedor de la galería:', galleryContainer);
    
    const imagenes = [
      'images/galeria1.jpg',
      'images/galeria2.jpg',
      'images/galeria3.jpg',
      'images/galeria4.jpg',
    ];
  
    function cargarGaleria() {
      console.log('Iniciando carga de la galería');
      imagenes.forEach((imagen, index) => {
        console.log(`Cargando imagen ${index + 1}: ${imagen}`);
        
        const imgElement = document.createElement('img');
        imgElement.src = imagen;
        imgElement.alt = `Imagen de galería ${index + 1}`;
        imgElement.classList.add('gallery-img');
        
        const figureElement = document.createElement('figure');
        figureElement.appendChild(imgElement);
        
        galleryContainer.appendChild(figureElement);
      });
      console.log('Galería cargada completamente');
    }
  
    cargarGaleria();
  });