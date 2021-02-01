try{
  if(document.querySelectorAll('.service-works__title').length) {
    (function(){
      const items = [...document.querySelectorAll('.service-works__title')];
      items.forEach(item => {
        item.addEventListener('click', e => {
          item.closest('.service-works__item').classList.toggle('closed');
        });
      });
    })();
  }
}catch(err){console.log(err);}
