window.addEventListener('scroll', function() {
  let $header  = document.querySelector('.header'),
  top = pageYOffset;
  if (top > 0) {
    $header.classList.add('--scroll');
  } else {
    $header.classList.remove('--scroll');
  }
})

function round() {
let $round = document.querySelector('.header__round'),
$wrapperLeft = document.querySelector('.header__wrapper').offsetLeft;
return $round.style.left = $wrapperLeft + 'px';
}
round();

const topSlider = new Swiper('.swiper .top-slider__slider', {
  loop: true,
  navigation: {
    nextEl: '.top-slider__slider .swiper-button-next',
    prevEl: '.top-slider__slider .swiper-button-prev',
  },
  pagination: {
    el: '.top-slider__slider .swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      let productname = document.querySelectorAll('.swiper-slide')
      [index].dataset.productName
      console.log(index, className, productname);
      return `<span class="${className}">${productname}</span>`
    }
  },
});


