import $ from 'jQuery';
import fullpage from 'fullpage.js';
import '../../../../../node_modules/fullpage.js/vendors/scrollOverflow.min';

$(document).ready(() => {
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
  });
});