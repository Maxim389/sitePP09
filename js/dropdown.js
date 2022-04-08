$('.dropdown-toggler').click(function () {
    $(this).toggleClass("tab-active");
    $(this).parent().find('.dropdown-content').slideToggle(1000);
 });
 
 $('li.tabs').click(function () {
    $('li.tabs a').removeClass('tabs-active');
    $(this).find('a').addClass("tabs-active");
 });

 let mainmenu = document.querySelector('.header-list');
let mainhamburger = document.querySelector('.hamburger');
let headerlist = document.querySelector('.header-list')

mainhamburger.addEventListener('click', () =>{
    mainmenu.classList.toggle("header-list--active")
    mainhamburger.classList.toggle("hamburger--active")
})
headerlist.addEventListener('click', () =>{
  mainmenu.classList.toggle("header-list--active")
  mainhamburger.classList.remove("hamburger--active")
})
 
 