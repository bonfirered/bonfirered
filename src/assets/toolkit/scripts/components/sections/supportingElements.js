import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="supportingElements"]');
  const $card = $section.find('[data-card]');

  var controller = new ScrollMagic.Controller();

  // cards
  var card = new TweenMax.staggerFromTo($card, .2, { scale: '1.02', y: '30', opacity: '0' }, { scale: '1', y:'0', opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .35 }, 0.15);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(card)
    .triggerHook(.95)
    .reverse(false);
});
