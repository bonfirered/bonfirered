import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="guidingPrinciplesCore"]');
  const $subtitle = $section.find('[data-subtitle]');
  const $copy = $section.find('[data-copy]');
  const $diamond = $section.find('[data-diamond]');

  var controller = new ScrollMagic.Controller();

  // subtitle
  var subtitle = new TimelineMax().fromTo($subtitle, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: .5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitle)
    .triggerHook(.95)
    .reverse(false);

  // title
  var mySplitText = new SplitText($('#guidingPrinciplesCoreTitle'), { type: 'words, chars' });
  var title = new TimelineMax().staggerFrom(mySplitText.words, 0.4, { opacity: 0, ease: Linear.easeIn, delay: .75 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(title)
    .triggerHook(.95)
    .reverse(false);

  // diamonds
  var diamond = new TweenMax.staggerTo($diamond, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 1.75 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(diamond)
    .triggerHook(.95)
    .reverse(false);

  // copy
  var copy = new TimelineMax().fromTo($copy, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: 2.75 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(copy)
    .triggerHook(.95)
    .reverse(false);
});
