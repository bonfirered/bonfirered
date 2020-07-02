import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TweenLite from 'TweenLite';
import ScrollMagic from 'ScrollMagic';
import TimelineMax from 'TimelineMax';

$(document).ready(() => {
  const $navItem = $('[data-nav-item]');
  const $navParent = $('[data-nav-parent]');
  const $navSub = $('[data-nav-sub]');
  const $navSubItem = $('[data-nav-sub] > li');
  const $navSubSection = $('[data-nav-sub-section]');
  const $navOpen = $('[data-open-nav]');
  const $navClose = $('[data-close-nav]');
  const $navOverlay = $('[data-nav-overlay]');
  const $lineOne = $('[data-nav-line-one]');
  const $lineTwo = $('[data-nav-line-two]');
  const $lineThree = $('[data-nav-line-three]');
  const $lineFour = $('[data-nav-line-four]');

  var controller = new ScrollMagic.Controller();

  var navItem = new TweenMax.staggerTo($navItem, .2, { opacity: '1', y: '0', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 1.6 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $navItem.get(0) })
    .addTo(controller)
    .setTween(navItem)
    .triggerHook(1)
    .reverse(false);

  $navItem
  .mouseenter(function() {
    $(this).find($navParent).addClass('active');
    $(this).find($navSub).addClass('active');

    var controller = new ScrollMagic.Controller();

    $($navSub).each(function(index) {
      var $this = $(this);
      var $item = $(this).children('li');

      var navSubItems = new TweenMax.to($item, 0, {
        opacity: '0',
        y: '-20',
      });

      new ScrollMagic.Scene({ triggerElement: $item })
        .addTo(controller)
        .setTween(navSubItems)
        .triggerHook(1)
        .reverse(false);

      var navSubItem = new TweenMax.staggerTo($item, .3, { opacity: '1', y: '0', ease: Circ.easeOut }, -.06);

      new ScrollMagic.Scene({ triggerElement: $item.get(0) })
        .addTo(controller)
        .setTween(navSubItem)
        .triggerHook(1)
        .reverse(false);
    });
  })
  .mouseleave(function() {
    $(this).find($navParent).removeClass('active');
    $(this).find($navSub).removeClass('active');
  });

  $navSubItem.each(function (index) {
    var href = $(this).children('a').attr('href');
    var hash = window.location.hash;

    if (href === hash) {
      $(this).children('a').addClass('active');
      $(this).siblings().children('a').removeClass('active');
    }
  });

  window.addEventListener('hashchange', function (index) {
    var hash = window.location.hash;

    $navSubItem.each(function (index) {
      var href = $(this).children('a').attr('href');
  
      if (href === hash) {
        $(this).children('a').addClass('active');
        $(this).siblings().children('a').removeClass('active');
      }
    });
  }, false);

  $navOpen.on('click', function () {
    $navOverlay.addClass('active');

    setTimeout(function () {
      $navClose.addClass('active');
    }, 1300);
  });

  $navClose.on('click', function () {
    $navOverlay.removeClass('active');
  });

  // lines
  var lineOne = new TimelineMax().fromTo($lineOne, .3, { opacity: '0', left: 0 }, { opacity: '1', left: '170px', ease: Linear.easeIn, delay: 2 });

  new ScrollMagic.Scene({ triggerElement: $lineOne.get(0) })
    .addTo(controller)
    .setTween(lineOne)
    .triggerHook(1)
    .reverse(false);

  var lineTwo = new TimelineMax().fromTo($lineTwo, .3, { opacity: '0', left: 0 }, { opacity: '1', left: '375px', ease: Linear.easeIn, delay: 2.4 });

  new ScrollMagic.Scene({ triggerElement: $lineTwo.get(0) })
    .addTo(controller)
    .setTween(lineTwo)
    .triggerHook(1)
    .reverse(false);

  var lineThree = new TimelineMax().fromTo($lineThree, .3, { opacity: '0', left: 0 }, { opacity: '1', left: '570px', ease: Linear.easeIn, delay: 2.8 });

  new ScrollMagic.Scene({ triggerElement: $lineThree.get(0) })
    .addTo(controller)
    .setTween(lineThree)
    .triggerHook(1)
    .reverse(false);
  
  var lineFour = new TimelineMax().fromTo($lineFour, .3, { opacity: '0', left: 0 }, { opacity: '1', left: '770px', ease: Linear.easeIn, delay: 3.2 });

  new ScrollMagic.Scene({ triggerElement: $lineFour.get(0) })
    .addTo(controller)
    .setTween(lineFour)
    .triggerHook(1)
    .reverse(false);
});
