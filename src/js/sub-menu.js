try{
  (function(){
    const lis = [...document.querySelectorAll('li.menu-item-has-children')];
  
    lis.forEach(li => {
      li.addEventListener('click', e => {
        e.stopPropagation();
        li.classList.toggle('active');
        li.querySelector('ul.sub-menu').classList.toggle('active');
        li.querySelector('ul.sub-menu').addEventListener('click', e => e.stopPropagation());
      });
    });
  
    document.body.addEventListener('click', e => {
      [...document.querySelectorAll('ul.sub-menu')].forEach(ul => ul.classList.remove('active'));
      [...document.querySelectorAll('li.menu-item-has-children')].forEach(li => li.classList.remove('active'));
    })
  })();
}catch(err){console.log(err);}
