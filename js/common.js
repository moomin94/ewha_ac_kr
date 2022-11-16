'use strict';

document.addEventListener("DOMContentLoaded", function(){
  const navA = document.querySelectorAll('.main-menu > li > a');
  const navLi = document.querySelectorAll('.main-menu > li');
  const subMenu = document.querySelectorAll('.sub-menu');
  const eventLi = document.querySelectorAll('.event-list li');
  const quickCloseBtn = document.querySelectorAll('.btn-quick-close');
  const goBtn = document.querySelectorAll('.go-btn p');
  const quickBtn = document.querySelector('.quick-btn');
  const headerBottom = document.querySelector('.header-bottom');
  const aTag = document.querySelectorAll('a');

  aTag.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
    });
  });


  // window.scrollY 에 따라 quick btn show/hide
  window.addEventListener('scroll', function(){
    if(this.scrollY > 25){
      quickBtn.classList.add('on');
    }else {
      quickBtn.classList.remove('on');
    }
    if(this.scrollY > 156) {
      headerBottom.classList.add('on');
    }else{
      headerBottom.classList.remove('on');
    }
  })

  // nav hover / click event
  navA.forEach(function(item){
    item.addEventListener('mouseover', function(){
      item.classList.add('on');
    });
    item.addEventListener('mouseout', function(){
      item.classList.remove('on');
    });
    item.addEventListener('click', function(){
      if(item.parentElement.classList.contains('on')){
        item.parentElement.classList.remove('on');
      }else {
        item.classList.add('on');
        navLi.forEach(function(item){
          item.classList.remove('on');
        });
        item.parentElement.classList.add('on');
      }
    });
  });

  subMenu.forEach(function(item){
    item.addEventListener('mouseover', function(){
      item.parentElement.classList.add('on');
    });
    item.addEventListener('mouseout', function(){
      item.parentElement.classList.remove('on');
    });
  });
  
  // event area toggle class
  eventLi.forEach(function(item){
    item.addEventListener('mouseover', function(){
      eventLi.forEach(function(item){
        item.classList.remove('on');
      })
      item.classList.add('on');
    });
    item.addEventListener('mouseout', function(){
      item.classList.remove('on');
      eventLi[0].classList.add('on');
    });
  });

  // short-cut-box, footer-quick-box close btn event
  quickCloseBtn.forEach(function(item){
    item.addEventListener('click', function(){
      item.parentElement.classList.toggle('on');
    });
  });

  // footer go-btn event
  goBtn.forEach(function(item){
    item.addEventListener('click', function(){
      item.parentElement.classList.toggle('on');
    });
  });


  // Main img area
  const slideBox = document.querySelector('.main-wrap');
  const slideItem = document.querySelectorAll('.main-img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const playPauseBtn = document.querySelector('.play-pause-btn');
  const firstBtn = document.querySelector('.first');
  const secondBtn = document.querySelector('.second');
  const pagination = document.querySelectorAll('.pagination .btn');

  let counter = 1;
  const size = 100 / 4;
  slideBox.style.transform = 'translateX(' + -size * counter + '%)';

  // slide 오른쪽으로 이동
  function moveSlide(){
      if (counter >= slideItem.length - 1) return;
      slideBox.style.transition = "transform 0.4s ease-in-out";
      counter++;
      slideBox.style.transform = "translateX(" + -size * counter + "%)";
      pagination.forEach(function(item){
        item.classList.toggle('on');
      });
  };

  // 3.5초마다 자동으로 오른쪽으로 이동
  let autoSlide = setInterval(moveSlide, 3500);

  // next 버튼 클릭시 오른쪽으로 이동
  nextBtn.addEventListener("click", function(){
      clearInterval(autoSlide);
      moveSlide();
  });

  // prev 버튼 클릭시 왼쪽으로 이동
  prevBtn.addEventListener("click", () => {
      clearInterval(autoSlide);
      if (counter <= 0) return;
      slideBox.style.transition = "transform 0.4s ease-in-out";
      counter--;
      slideBox.style.transform = "translateX(" + -size * counter + "%)";
      pagination.forEach(function(item){
        item.classList.toggle('on');
      });
  });

  // play, pause 버튼 클릭시 작동
  playPauseBtn.addEventListener('click', function(){
      if(this.id == 'pause'){
          clearInterval(autoSlide);
          this.id = 'play';
        }else{
          clearInterval(autoSlide);
          this.id = 'pause';
          autoSlide = setInterval(moveSlide, 3500);
      }
  });

  firstBtn.addEventListener('click', function(){
    if (counter <= 1) return;
    clearInterval(autoSlide);
    slideBox.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideBox.style.transform = "translateX(" + -size * counter + "%)";
    autoSlide = setInterval(moveSlide, 3500);
    pagination.forEach(function(item){
      item.classList.remove('on');
    })
    this.classList.add('on');
  });

  secondBtn.addEventListener('click', function(){
    if (counter > 1) return;
    clearInterval(autoSlide);
    slideBox.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideBox.style.transform = "translateX(" + -size * counter + "%)";
    pagination.forEach(function(item){
      item.classList.remove('on');
    })
    this.classList.add('on');
  });

  // 2번에서 1번, 1번에서 2번 이미지로 자연스럽게 넘어가기
  slideBox.addEventListener("transitionend", function () {
      if (slideItem[counter].id === "last-clone") {
      slideBox.style.transition = "none";
      counter = slideItem.length - 2;
      slideBox.style.transform = "translateX(" + -size * counter + "%)";
      }
      if (slideItem[counter].id === "first-clone") {
          slideBox.style.transition = "none";
          counter = slideItem.length - counter;
          slideBox.style.transform = "translateX(" + -size * counter + "%)";
      }
  });

 });