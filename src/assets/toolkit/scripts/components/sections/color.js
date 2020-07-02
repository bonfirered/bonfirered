import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="color"]');
  const $subtitle = $section.find('[data-subtitle]');
  const $color = $section.find('[data-color]');
  const $colorCircle = $section.find('[data-color-circle]');
  const $hierarchy = $section.find('[data-hierarchy]');

  var controller = new ScrollMagic.Controller();

  // subtitle
  var subtitle = new TimelineMax().fromTo($subtitle, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .3 });
  
  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitle)
    .triggerHook(.95)
    .reverse(false);

  // color
  var color = new TweenMax.staggerTo($color, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .35 }, 0.1);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(color)
    .triggerHook(.95)
    .reverse(false);

  // color circle
  var colorCircle = new TweenMax.staggerTo($colorCircle, .2, { scale: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .35 }, 0.1);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(colorCircle)
    .triggerHook(.95)
    .reverse(false);
  
  // hierarchy
  var hierarchy = new TimelineMax().fromTo($hierarchy, .2, { width: '0' }, { width: '100%', ease: Linear.easeIn, delay: .5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(hierarchy)
    .triggerHook(.95)
    .reverse(false);
});
