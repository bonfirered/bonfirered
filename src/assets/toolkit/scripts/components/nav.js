import $ from 'jQuery';

$(document).ready(() => {
  const $navItem = $('[data-nav-item]');
  const $navParent = $('[data-nav-parent]');
  const $navSub = $('[data-nav-sub]');
  const $navSubItem = $('[data-nav-sub] > li');

  $navItem
  .mouseenter(function() {
    $(this).find($navParent).addClass('active');
    $(this).find($navSub).addClass('active');
  })
  .mouseleave(function() {
    $(this).find($navParent).removeClass('active');
    $(this).find($navSub).removeClass('active');
  });

  $navSubItem.each(function (index) {
    var href = $(this).children('a').attr('href');
    var hash = window.location.hash;

    if (href === hash) {
      console.log(href, hash);
      $(this).children('a').addClass('active');
      $(this).siblings().children('a').removeClass('active');
    }
  });

  window.addEventListener('hashchange', function (index) {
    var hash = window.location.hash;

    $navSubItem.each(function (index) {
      var href = $(this).children('a').attr('href');
  
      if (href === hash) {
        console.log(href, hash);
        $(this).children('a').addClass('active');
        $(this).siblings().children('a').removeClass('active');
      }
    });
  }, false);
});
