'use strict';

document.addEventListener("DOMContentLoaded", function(){
  const selectBox = document.querySelector('.professor-wrap .select-box');
  const uniBtn = document.querySelectorAll('.uni button');
  const uniPage = document.querySelectorAll('.tab');
  const majorBtn = document.querySelectorAll('.professor-wrap .btn-wrap button');

    // 인문과학대학 페이지 교수진 검색창 event
    selectBox.addEventListener('click', function(){
      this.classList.toggle('on');
    });

    //인문과학대학 페이지 탭버튼
    uniBtn.forEach(function(item,index){
      item.addEventListener('click', function(){
        uniBtn.forEach(function(item){
          item.classList.remove('on');
        });
        uniPage.forEach(function(item){
          item.classList.remove('on');
        })
        item.classList.add('on');
        uniPage[index].classList.add('on');
      })
    });

    // 과별 교수님 사진 보기 탭버튼
    majorBtn.forEach(function(item){
      item.addEventListener('click', function(){
        majorBtn.forEach(function(item){
          item.classList.remove('on');
        })
        item.classList.add('on');
      })
    });

});
