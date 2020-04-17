import $ from 'jQuery';
import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="guidingPrinciplesFuck"]');

  const $diamond = $section.find('[data-diamond]');

  var controller = new ScrollMagic.Controller();

  var diamond = new TweenMax.staggerTo($diamond, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 1 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(diamond)
    .triggerHook(.95)
    .reverse(false);
});
