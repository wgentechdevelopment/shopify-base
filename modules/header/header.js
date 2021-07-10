var $ = require('jquery');
var stickyfill = require('stickyfill');
var throttle = require('lodash.throttle');

// variables
var breakpoint = 999
var body = document.body
var lastScrollTop = 0

function Header(el) {
  var $el = $(el);
  var menu = $('.js-header-menu')
  console.log('-----menu')
  console.log(menu)
  console.log($el)

  var stickyPolyfill = stickyfill()
  if (menu) {
    stickyPolyfill.add(menu)
  }
}

module.exports = Header;
