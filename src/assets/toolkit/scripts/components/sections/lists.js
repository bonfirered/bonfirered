import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="lists"]');
  const $card = $section.find('[data-card]');
  const $subtitleO = $section.find('[data-subtitle-o]');
  const $subtitleU = $section.find('[data-subtitle-u]');

  var controller = new ScrollMagic.Controller();

  // ordered subtitle
  var subtitleO = new TimelineMax().fromTo($subtitleO, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: .5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitleO)
    .triggerHook(.95)
    .reverse(false);

  // cards
  var card = new TweenMax.staggerTo($card, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .65 }, 0.35);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(card)
    .triggerHook(.95)
    .reverse(false);

  // unordered subtitle
  var subtitleU = new TimelineMax().fromTo($subtitleU, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: 1.5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitleU)
    .triggerHook(.95)
    .reverse(false);
});
