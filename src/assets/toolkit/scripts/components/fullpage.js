import $ from 'jQuery';
import fullpage from 'fullpage.js';
import '../../../../../node_modules/fullpage.js/vendors/scrollOverflow.min';

$(document).ready(() => {
  const $navSubSection = $('[data-nav-sub-section]');
  const $navSubSectionItem = $('[data-nav-sub-section] > li');
  const $sectionNavParent = $('[data-section-nav-parent]');
  const $sectionNavTitle = $('[data-section-nav-title]');
  const $sectionTitle = $('[data-section-title]');

  new fullpage(`[data-fullpage]`, {
    licenseKey: '3C00B116-C1554022-9A0777F5-891F95B5',
    sectionSelector: `[data-fullpage-section]`,
    scrollOverflow: true,
    lockAnchors: false,
    anchors: [
      'landing',
      'brandPillarsCraft',
      'brandPillarsTogether',
      'brandPillarsPlay',
      'personality',
      'audience',
      'guidingPrinciplesCore',
      'guidingPrinciplesKindling',
      'guidingPrinciplesFlame',
      'guidingPrinciplesFuck',
      'name',
      'logo',
      'logoSymbol',
      'logoType',
      'logoLockups',
      'logoUsage',
      'logoCobranded',
      'color',
      'typographyPrimary',
      'typographySecondary',
      'typographyTertiary',
      'graphicSupporting',
      'graphicIllustrations',
      'photography',
      'toneOfVoice',
      'typography',
      'buttons',
      'cursor',
      'navigationBar',
      'formElements',
      'lists',
      'map',
      'blockquote',
      'carouselPagination',
      'supportingElements'
    ],
    afterLoad(origin, destination, direction) {
      // hide and show sub section navs depending on active section
      $navSubSection.each(function () {
        var nav = $(this).attr('data-nav-sub-section');
        var hash = window.location.hash;
    
        if (hash.indexOf(nav) != -1) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });

      // add active class to active sub section nav link
      $navSubSectionItem.each(function (index) {
        var href = $(this).children('a').attr('href');
        var hash = window.location.hash;
    
        if (href === hash) {
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
        }
      });

      // transition in active section title
      $sectionTitle.each(function (index) {
        if ($(this).hasClass('active')) {
          var title = $(this).attr('data-section-title');
          var parentSection = $(this).attr('data-section-parent');

          $sectionNavTitle.text(title);
          $('[data-section-nav-parent]').removeClass('active');
          $('[data-section-nav-parent="' + parentSection + '"]').addClass('active');
        }
      });
    }
  });
});