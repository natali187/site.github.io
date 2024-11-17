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


var textScaleDelay = 0.1;

document.querySelectorAll('.textScale span').forEach((item) => {

    textScaleDelay = textScaleDelay + 0.2

    item.style.animationDelay = textScaleDelay + "s";


});

let words = [
    "Лучшие направления",
    "Лучшие направления",
    "Лучшие направления",
    "Лучшие направления"
  ];
  let colors = [
    "black",
    "red",
    "green",
    "blue"
  ];
  let currentWord = 0;
  let intervalid = setInterval(()=>{
    if (currentWord == words.length - 1)
      currentWord = 0;
    else
      currentWord++;
    let obj = document.getElementById("word");
    obj.style.color = colors[currentWord];
    obj.innerText = words[currentWord];
  }, 5000);

  