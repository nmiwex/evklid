const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

let tabs = document.querySelectorAll('.tabs__step'),
    contents = document.querySelectorAll('.step__content');
tabs.forEach(function(tab) {
  tab.addEventListener('click', e => {
    let tabData = e.currentTarget.dataset.tab;
    tabs.forEach(function(el) {
      el.classList.remove('tabs__active');
    });
    document.querySelector(`[data-tab="${tabData}"]`).classList.add('tabs__active');

    contents.forEach(function(content) {
      content.classList.remove('step__content_active');
    });
    document.querySelector(`[data-step="${tabData}"]`).classList.add('step__content_active');
  });
});

let burger = document.querySelector('.section-header__burger'),
    modal = document.querySelector('.section-header__modal'),
    modalClose = document.querySelector('.modal__close');

burger.addEventListener('click', function() {
  modal.style.display = "block"
  // modal.classList.add('section-header__modal_active');
})

modalClose.addEventListener('click', function() {
  modal.style.display = "none"
  // modal.classList.remove('section-header__modal_active');
})