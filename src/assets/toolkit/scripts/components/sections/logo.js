import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="logo"]');
  const $subtitle = $section.find('[data-subtitle]');
  const $logo = $section.find('[data-logo]');
  const $copy = $section.find('[data-copy]');
  const $listItem = $section.find('[data-list-item]');

  var controller = new ScrollMagic.Controller();

  // subtitle
  var subtitle = new TimelineMax().fromTo($subtitle, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: .5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitle)
    .triggerHook(.95)
    .reverse(false);

  // logos
  var logo = new TweenMax.staggerTo($logo, .3, { scale: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .75 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(logo)
    .triggerHook(.95)
    .reverse(false);

  // copy
  var copy = new TimelineMax().fromTo($copy, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: 1.5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(copy)
    .triggerHook(.95)
    .reverse(false);

  // list items
  var listItem = new TweenMax.staggerTo($listItem, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 1.8 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(listItem)
    .triggerHook(.95)
    .reverse(false);
});