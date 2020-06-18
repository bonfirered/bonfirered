import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TweenLite from 'TweenLite';
import ScrollMagic from 'ScrollMagic';
import { TimelineMax } from 'gsap';

$(document).ready(() => {
  const $section = $('[data-anchor="landing"]');
  const $line = $('[data-line]');
  const $title = $('[data-title-shuffle]');

  var controller = new ScrollMagic.Controller();

  // lines
  var line = new TweenMax.staggerTo($line, .2, { height: '100%', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 1 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(line)
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
});