var $ = require('jquery');

function Accordion(el) {
  var $el = $(el);

  $el.find('.accordion__item-header').on('click', function() {
    var $parent = $(this).parent();
    var $button = $(this).find('.accordion__arrow');

    $parent.find(".accordion__item-content").slideToggle('fast');
    $parent.toggleClass('accordion__item--active');

    if ($parent.hasClass('accordion__item--active')) {
      $button.attr('aria-expanded', true);
      $button.attr('aria-label', $button.attr('data-hide-label'));
    } else {
      $button.attr('aria-expanded', false);
      $button.attr('aria-label', $button.attr('data-show-label'));
    }
  });
}

module.exports = Accordion;
