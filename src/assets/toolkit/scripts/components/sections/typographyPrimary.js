import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="typographyPrimary"]');
  const $subtitle = $section.find('[data-subtitle]');
  const $options = $section.find('[data-options]');
  const $textarea = $section.find('[data-typography-textarea]');
  const $copy = $section.find('[data-copy]');

  var controller = new ScrollMagic.Controller();

  // subtitle
  var subtitle = new TimelineMax().fromTo($subtitle, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .3 });
  
  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(subtitle)
    .triggerHook(.95)
    .reverse(false);

    // title
  var mySplitText = new SplitText($('#primaryTitle'), { type: 'words, chars' });
  var title = new TimelineMax().staggerFrom(mySplitText.words, 0.2, { opacity: 0, ease: Linear.easeIn, delay: .4 }, 0.15);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(title)
    .triggerHook(.95)
    .reverse(false);

  var options = new TimelineMax().fromTo($options, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .6 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(options)
    .triggerHook(.95)
    .reverse(false);
    
  var textarea = new TimelineMax().fromTo($textarea, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .7 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(textarea)
    .triggerHook(.95)
    .reverse(false);

  var copy = new TimelineMax().fromTo($copy, .2, { opacity: '0', y: '20' }, { opacity: '1', y: '0', ease: Linear.easeIn, delay: .75 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(copy)
    .triggerHook(.95)
    .reverse(false);
});
