var $ = require('jquery');

function Language(el) {
  var $el = $(el);
  var button = $('.js-language-label');

  button.hover(function() {
    $el.addClass('is-active');
  });

  console.log('language...')
  console.log($el)
}

module.exports = Language;
