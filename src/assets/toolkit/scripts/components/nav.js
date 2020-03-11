import $ from 'jQuery';

$(document).ready(() => {
  const $navItem = $('[data-nav-item]');
  const $navParent = $('[data-nav-parent]');
  const $navSub = $('[data-nav-sub]');

  $navItem
  .mouseenter(function() {
    $(this).find($navParent).addClass('active');
    $(this).find($navSub).addClass('active');
  })
  .mouseleave(function() {
    $(this).find($navParent).removeClass('active');
    $(this).find($navSub).removeClass('active');
  });
});
