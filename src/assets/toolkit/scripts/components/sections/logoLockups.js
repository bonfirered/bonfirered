import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="logoLockups"]');
  const $subtitle = $section.find('[data-subtitle]');
  const $card = $section.find('[data-card]');

  var controller = new ScrollMagic.Controller();

  // subtitle
  var subtitle = new TimelineMax().fromTo($subtitle, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .3 });
  
  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitle)
    .triggerHook(.95)
    .reverse(false);

  // cards
  var card = new TweenMax.staggerFromTo($card, .2, { scale: '1.02', y: '30', opacity: '0' }, { scale: '1', y:'0', opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .35 }, 0.1);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(card)
    .triggerHook(.95)
    .reverse(false);
});
