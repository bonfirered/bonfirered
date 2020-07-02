import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="map"]');
  const $card = $section.find('[data-card]');

  var controller = new ScrollMagic.Controller();

  // cards
  var card = new TimelineMax().fromTo($card, .2, { opacity: '0', y:'30', scale: '1.02'}, { opacity: '1', y: '0', scale: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .25 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(card)
    .triggerHook(.95)
    .reverse(false);
});
