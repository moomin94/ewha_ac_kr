'use strict';

document.addEventListener("DOMContentLoaded", function(){
  const quickCloseBtn = document.querySelectorAll('.btn-quick-close');
  const btn = document.querySelectorAll('a, button');
  const navA = document.querySelectorAll('.main-menu > li > a');
  const navLi = document.querySelectorAll('.main-menu > li');
  const subMenu = document.querySelectorAll('.sub-menu');
  const goBtn = document.querySelectorAll('.go-btn p');
  const logo = document.querySelector('.logo-wrap img');
  const subMenu1 = document.querySelectorAll('.introduce');
  const subMenu2 = document.querySelectorAll('.information');
  const subMenu3 = document.querySelectorAll('.university');
  const topBtn = document.querySelector('.top-btn');

  // 페이지 이동
  logo.addEventListener('click',function(){
    window.location.replace('index.html');
  });

  subMenu1.forEach(function(item){
    item.addEventListener('click', function(){
      window.location.replace('introduce.html');
    })
  });

  subMenu2.forEach(function(item){
    item.addEventListener('click', function(){
      window.location.replace('information.html');
    })
  });

  subMenu3.forEach(function(item){
    item.addEventListener('click', function(){
      window.location.replace('university.html');
    })
  });

  // a 태그 기능 막기
  btn.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
    });
  });

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

  // footer top btn
  topBtn.addEventListener('click', function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 
  })

 });