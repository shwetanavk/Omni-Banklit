'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1cords = section1.getBoundingClientRect();

  // console.log(s1cords);
  // window.scroll(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav-link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//section 4 Operations
const tabs = document.querySelectorAll('.operations-tab');
const tabsContainer = document.querySelector('.operations-tab-container');
const tabsContent = document.querySelectorAll('.operations-content');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations-tab');
  console.log(clicked);

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations-tab--active'));
  clicked.classList.add('operations-tab--active');

  tabsContent.forEach(tc => tc.classList.remove('operations-content--active'));
  document
    .querySelector(`.operations-content--${clicked.dataset.tab}`)
    .classList.add('operations-content--active');
});

const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav-link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//sticky navigation
// const obsCallBack = function () {
//   d;
// };
// const obsOptions = {
//   root: {},
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

// slider

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btn = document.querySelector('.refresh-icon');

let currentSlide = 0;
const maxSlide = slides.length;
// slider.style.transform = 'scale(0.9)';
// slider.style.overflow = 'visible';

console.log(slider);
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

btn.addEventListener('click', function () {
  if (currentSlide === maxSlide - 1) currentSlide = 0;
  else currentSlide++;
  console.log(slider);
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%) `)
  );
});

// .slide:hover {
//   filter: blur(8px);
// }
