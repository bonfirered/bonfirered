import $ from 'jQuery';

$(document).ready(() => {
  const $range = $('[data-typography-range]');
  const $value = $('[data-typography-value]');
  const $style = $('[data-typography-style]');
  const $textarea = $('[data-typography-textarea]');
  
  $range.on('input', function () {
    // update range progress with bonfire red 
    $range.css('background', 'linear-gradient(to right, #f15a22 0%, #f15a22 ' + this.value + '%, #61594b ' + this.value + '%, #61594b 100%)');

    // update text size value
    $value.text(this.value);
    $textarea.css({ 'font-size': this.value + 'px', 'line-height': this.value + 'px' });
  });

  $style.on('change', function () {
    var style = $(this).val();

    if (style != 'regular') {
      $textarea.removeClass('regular');
      $textarea.addClass('italic');
    } else if (style != 'italic') {
      $textarea.removeClass('italic');
      $textarea.addClass('regular');
    }
  });
});