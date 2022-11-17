'use strict';

document.addEventListener("DOMContentLoaded", function(){
  const headerBottom = document.querySelector('.header-bottom');
  const pathMenu = document.querySelectorAll('.path-list > li > a');

    // window.scrollY 에 따라 nav영역 show/hide
    window.addEventListener('scroll', function(){
      if(this.scrollY > 41.5) {
        headerBottom.classList.add('on');
      }else{
        headerBottom.classList.remove('on');
      }
    });


    pathMenu.forEach(function(item){
      item.addEventListener('click', function(){
        item.nextElementSibling.classList.toggle('on');
      })
    });

});
