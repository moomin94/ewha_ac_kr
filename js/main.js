'use strict';

document.addEventListener("DOMContentLoaded", function(){
  const eventLi = document.querySelectorAll('.event-list li');
  const quickBtn = document.querySelector('.quick-btn');
  const snsList = document.querySelectorAll('.sns .section-bottom article');
  const pressTabBtn = document.querySelectorAll('.press .title-wrap h4');
  const pressCont = document.querySelectorAll('.press .text-box');
  const headerBottom = document.querySelector('.header-bottom');

  // window.scrollY 에 따라 quick btn show/hide
  window.addEventListener('scroll', function(){
    if(this.scrollY > 25){
      quickBtn.classList.add('on');
    }else {
      quickBtn.classList.remove('on');
    }
  });

  // window.scrollY 에 따라 nav영역 show/hide
  window.addEventListener('scroll', function(){
    if(this.scrollY > 156) {
      headerBottom.classList.add('on');
    }else{
      headerBottom.classList.remove('on');
    }
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

  // sns area list hover event
  snsList.forEach(function(item){
    item.addEventListener('mouseover',function(){
      snsList.forEach(function(item){
        item.classList.remove('on');
      });
      item.classList.add('on');
    });
    item.addEventListener('mouseout',function(){
      snsList.forEach(function(item){
        item.classList.add('on');
      });
    });
  });

  // press area tab toggle
  pressTabBtn.forEach(function(item, index){
    item.addEventListener('click', function(){
      pressTabBtn.forEach(function(item){
        item.classList.remove('on');
      });
      item.classList.add('on');
      pressCont.forEach(function(item){
        item.classList.remove('on');
      })
      pressCont[index].classList.add('on');
    });
  });

});