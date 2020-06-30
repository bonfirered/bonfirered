import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TweenLite from 'TweenLite';
import ScrollMagic from 'ScrollMagic';
import TimelineMax from 'TimelineMax';

$(document).ready(() => {
  const $section = $('[data-anchor="landing"]');
  const $lineOne = $section.find('[data-line-one]');
  const $lineTwo = $section.find('[data-line-two]');
  const $lineThree = $section.find('[data-line-three]');
  const $lineFour = $section.find('[data-line-four]');
  const $lineFive = $section.find('[data-line-five]');
  const $diamond = $section.find('[data-diamond]');

  var controller = new ScrollMagic.Controller();

  // lines
  var lineOne = new TimelineMax().fromTo($lineOne, .2, { opacity: '0', left: 0 }, { opacity: '1', left: '80px', ease: Linear.easeIn, delay: .25 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(lineOne)
    .triggerHook(1)
    .reverse(false);

  var lineTwo = new TimelineMax().fromTo($lineTwo, .6, { opacity: '0', right: 0 }, { opacity: '1', right: '800px', ease: Linear.easeIn, delay: .6 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(lineTwo)
    .triggerHook(1)
    .reverse(false);

  var lineThree = new TimelineMax().fromTo($lineThree, .6, { opacity: '0', right: 0 }, { opacity: '1', right: '600px', ease: Linear.easeIn, delay: 1 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(lineThree)
    .triggerHook(1)
    .reverse(false);

  var lineFour = new TimelineMax().fromTo($lineFour, .6, { opacity: '0', right: 0 }, { opacity: '1', right: '400px', ease: Linear.easeIn, delay: 1.4 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(lineFour)
    .triggerHook(1)
    .reverse(false);
  
  var lineFive = new TimelineMax().fromTo($lineFive, .6, { opacity: '0', right: 0 }, { opacity: '1', right: '200px', ease: Linear.easeIn, delay: 1.8 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(lineFive)
    .triggerHook(1)
    .reverse(false);

  // title
  var mySplitText = new SplitText('[data-title-shuffle]', { type: 'words, chars' });
  TweenLite.set('[data-title-shuffle]', { perspective: 400 });
  var title = new TimelineMax().staggerFrom(mySplitText.words, 0.2, { opacity: 0, ease: Linear.easeIn }, 0.05);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(title)
    .triggerHook(.95)
    .reverse(false);

  // diamonds
  var diamond = new TweenMax.staggerTo($diamond, .2, { opacity: '1', autoAlpha: 1, y: '0', yoyo: true, ease: Linear.easeIn, delay: .3 }, 0.15);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(diamond)
    .triggerHook(.95)
    .reverse(false);
});