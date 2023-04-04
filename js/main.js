$(function(){

  $('.menu, a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  $('.header__menu-btn, .header__menu a').on('click', function(){
    $('.header__menu-content').toggleClass('header__menu-content--active')
});

$('.header__menu-subnav-2, .header__subnav-link-2 a').on('click', function(){
  $('.subnav__mobile-2').toggleClass('subnav__mobile-2--active')
});

$('.header__menu-subnav-1, .header__subnav-link-1 a').on('click', function(){
  $('.subnav__mobile-1').toggleClass('subnav__mobile-1--active')
});

});

const buttonElems = document. querySelectorAll('.header__phone-btn');
const modalElem = document. querySelector('.modal');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
  const target = event.target;
  if (target === modalElem || target.closest('.modal__close')) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300)
  } 
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};

buttonElems.forEach(btn =>{
  btn.addEventListener('click', openModal);
});
modalElem.addEventListener('click', closeModal);