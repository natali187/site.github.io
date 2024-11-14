document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Когда 10% элемента видимо, срабатывает
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              const img = entry.target.querySelector('img');
              if (img) img.classList.add('visible');
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  const images = document.querySelectorAll('.section img');
  document.querySelectorAll('.animated-text');

  function showElementsOnScroll() {
      const triggerBottom = window.innerHeight / 5 * 4;

      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop < triggerBottom) {
              section.classList.add('visible');
          } else {
              section.classList.remove('visible');
          }
      });

      images.forEach(image => {
          const imageTop = image.getBoundingClientRect().top;

          if (imageTop < triggerBottom) {
              image.classList.add('visible');
          } else {
              image.classList.remove('visible');
          }
      });
  }
  

  window.addEventListener('scroll', showElementsOnScroll);
  showElementsOnScroll(); // Запускаем функцию при загрузке страницы
});
