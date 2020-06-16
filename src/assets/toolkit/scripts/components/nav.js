import $ from 'jQuery';
import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $navItem = $('[data-nav-item]');
  const $navParent = $('[data-nav-parent]');
  const $navSub = $('[data-nav-sub]');
  const $navSubItem = $('[data-nav-sub] > li');
  const $navSubSection = $('[data-nav-sub-section]');

  var controller = new ScrollMagic.Controller();

  var navItem = new TweenMax.staggerTo($navItem, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 3.4 }, 0.25);

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

      var navSubItem = new TweenMax.staggerTo($item, .3, { opacity: '1', y: '0', ease: Circ.easeOut }, -.15);

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
});
