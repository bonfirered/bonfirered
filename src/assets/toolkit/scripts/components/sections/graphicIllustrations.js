import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="graphicIllustrations"]');
  const $subtitle = $section.find('[data-subtitle]');
  const $image = $section.find('[data-image]');

  var controller = new ScrollMagic.Controller();

  // subtitle
  var subtitle = new TimelineMax().fromTo($subtitle, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .15 });
  
  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitle)
    .triggerHook(.95)
    .reverse(false);

  // image
  var image = new TimelineMax().fromTo($image, .2, { scale: '1.05', y: '30', opacity: '0' }, { scale: '1', y:'0', opacity: '1', ease: Linear.easeIn, delay: .35 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(image)
    .triggerHook(.95)
    .reverse(false);
});
