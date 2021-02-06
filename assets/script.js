const pageHTML = document.querySelector('.html');
const pageCSS = document.querySelector('.css');
const pageJS = document.querySelector('.js');
const pagePHP = document.querySelector('.php');
const dropDownHTML = document.querySelector('.dpHtml');
const dropDownCSS= document.querySelector('.dpCSS');
const dropDownJS= document.querySelector('.dpJS');
const dropDownPHP= document.querySelector('.dpPHP');

pageHTML.addEventListener('click',function(){
	dropDownHTML.classList.toggle('show');
});
pageCSS.addEventListener('click',function(){
	dropDownCSS.classList.toggle('show');
});
pageJS.addEventListener('click',function(){
	dropDownJS.classList.toggle('show');
});
pagePHP.addEventListener('click',function(){
	dropDownPHP.classList.toggle('show');
});
