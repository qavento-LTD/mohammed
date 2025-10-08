let menu = document.querySelector('.menu');
let links = document.querySelector('nav');
let bg_blur = document.querySelector('.background-blur');
let container = document.querySelector('.container')

const span1 = menu.querySelector('span');
const span2 = menu.querySelector('span:nth-child(2)');
const span3 = menu.querySelector('span:nth-child(3)');


links.style.right = '-5000px';
span3.style.top = '24px'
menu.addEventListener('click', () => {
  if (links.style.right === '-5000px') {
    links.style.right = '0';
    span1.style.top = '14px';
    span3.style.top = '14px';
    span1.style.transform = 'rotate(46deg)';
    span3.style.transform = 'rotate(-46deg)';
    span2.style.opacity = '0'
    span1.style.width = '100%';
    bg_blur.style.display = 'block';
    
  } else {
    links.style.right = '-5000px';
    span1.style.top = '0';
    span3.style.top = '24px';
    span1.style.transform = 'rotate(0deg)';
    span3.style.transform = 'rotate(0deg)';
    span2.style.opacity = '100'
    span1.style.width = '40%';
    bg_blur.style.display = 'none';
  }
});











window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    links.style.right = '-5000px';
    span1.style.top = '0';
    span3.style.top = '24px';
    span1.style.transform = 'rotate(0deg)';
    span3.style.transform = 'rotate(0deg)';
    span2.style.opacity = '100'
    span1.style.width = '40%';
    bg_blur.style.display = 'none';
    container.style.top = '-500px'
  }
})

bg_blur.addEventListener('click', () => {
    links.style.right = '-5000px';
    span1.style.top = '0';
    span3.style.top = '24px';
    span1.style.transform = 'rotate(0deg)';
    span3.style.transform = 'rotate(0deg)';
    span2.style.opacity = '100'
    span1.style.width = '40%';
    bg_blur.style.display = 'none';
})
let lastScrollTop = 0; 
window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    container.style.top = '-500px';
  }
  else {
    container.style.top = '0';
    
  }
  lastScrollTop = currentScroll;
});






window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100; // قلل الرقم لو عايزها تظهر أسرع

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}