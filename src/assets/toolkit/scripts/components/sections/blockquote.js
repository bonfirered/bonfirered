import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="blockquote"]');
  const $quote = $section.find('[data-quote]');
  const $cite = $section.find('[data-cite]');

  var controller = new ScrollMagic.Controller();

  // quote
  var quote = new TimelineMax().fromTo($quote, .2, { opacity: '0', y:'30'}, { opacity: '1', y: '0', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .35 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(quote)
    .triggerHook(.95)
    .reverse(false);

  // cite
  var cite = new TimelineMax().fromTo($cite, .2, { opacity: '0'}, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .45 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(cite)
    .triggerHook(.95)
    .reverse(false);
});
