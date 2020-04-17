import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TweenLite from 'TweenLite';
import ScrollMagic from 'ScrollMagic';

const $line = $('[data-line]');
const $title = $('[data-title-shuffle]');

var controller = new ScrollMagic.Controller();

var line = new TweenMax.staggerTo($line, .3, { height: '100%', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 3 }, 0.25);

new ScrollMagic.Scene({ triggerElement: $line.get(0) })
  .addTo(controller)
  .setTween(line)
  .triggerHook(1)
  .reverse(false);

var mySplitText = new SplitText('[data-title-shuffle]', { type: 'words, chars'} );

TweenLite.set('[data-title-shuffle]', { perspective: 400 });

TweenMax.staggerFrom(mySplitText.words, 0.4, { opacity: 0, ease: Linear.easeIn }, 0.25, allDone);

function allDone() {
  mySplitText.revert();
}