var $ = require('jquery');

function Header(el) {
  var $el = $(el);
  var menu = $('.js-header-menu');
  var nav = $('.js-nav');
  var navClose = $('.js-nav-close');
  var headerMobile = $('.js-btn-mobile');
  var body = $('body');

  function triggerNavbar() {
    headerMobile.toggleClass('is-active');
    nav.toggleClass('is-active');
    body.toggleClass('is-header-nav');

    if (nav.hasClass('is-active')) {
      nav.toggleClass('is-animated');
    } else {
      setTimeout(function() {
        nav.removeClass('is-animated')
      }, 300);
    }
  }

  headerMobile.on('click', triggerNavbar);
  navClose.on('click', triggerNavbar);

  // Parent menu click
  var parentMenu = $('.js-link');

  function toggleSubNavByClick() {
    var link = $(this);
    var isActive = link.hasClass('is-active');
    var group = link.find('.js-subnav');
    var groupInner = link.find('.header__subnav-inner');
    var groupHeight = groupInner.height();

    // close all group
    if (group.length > 0) {
      if (!isActive) {
        group.height(groupHeight);
        link.addClass('is-active');
        group.addClass('is-active');
      } else {
        group.height(0);
        link.removeClass('is-active');
        group.removeClass('is-active');
      }
    }
  }

  parentMenu.on('click', toggleSubNavByClick);
  // parentMenu.on('mouseenter', openSubNavOnEnter);
  // parentMenu.on('mouseleave', closeSubNavOnLeave);
}

module.exports = Header;
