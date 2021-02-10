try{
  (function(){
    const body = document.body;
    const btn = document.querySelector('.menu-button');
    
    btn.addEventListener('click', e => {
          body.classList.toggle('menu-opened');
      });
  })();
}catch(err){console.log(err);}