(function(){
  let currentPosition = 0;
  document.addEventListener('scroll', e => {
    if(currentPosition > window.scrollY) document.body.classList.remove('up');
    if(currentPosition < window.scrollY) document.body.classList.add('up');
    currentPosition = window.scrollY;
  });

  function firstAddFixedClass(){
    if(window.scrollY > 120) {
      document.body.classList.add('fixed', 'up');
      document.removeEventListener('scroll', firstAddFixedClass);
      document.addEventListener('scroll', removeFixedClass)
    }
  }

  function removeFixedClass(){
    if(window.scrollY < 20) {
      document.body.classList.remove('fixed');
      document.addEventListener('scroll', firstAddFixedClass);
    }
  }

  document.addEventListener('scroll', firstAddFixedClass);
})();