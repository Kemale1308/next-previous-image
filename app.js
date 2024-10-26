
    let  images = document.querySelectorAll('.image'); 
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
          if (i === index) {
              img.classList.add('visible'); 
          } else {
              img.classList.remove('visible'); 
          }
      });
  }
  

    document.querySelector('#next').addEventListener('click', () => {
      currentIndex += 1;
      if (currentIndex >= images.length) { 
          currentIndex = 0; 
      }
      showImage(currentIndex);
  });
  
  document.querySelector('#prev').addEventListener('click', () => {
      currentIndex -= 1;
      if (currentIndex < 0) { 
          currentIndex = images.length - 1;
      }
      showImage(currentIndex);
  });