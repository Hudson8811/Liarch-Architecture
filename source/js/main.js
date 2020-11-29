'use strict';
var body = $('body');
/* Menu */

(function () {
  var menuOpenBtn = $('.menu-toggle');
  var menuCloseBtn = $('.menu__close');
  var menu = $('.menu');

  var ModifierClass = {
    MENU: 'menu--opened',
    TOGGLE: 'menu-toggle--opened'
  };

  menu.on('click', function(evt) {
    evt.stopPropagation();
  })

  menuOpenBtn.on('click', function() {
    menuCloseBtn.on('click', closeMenu);
    //body.on('click', closeMenu);
    menu.addClass(ModifierClass.MENU);
    menuOpenBtn.addClass(ModifierClass.TOGGLE);
  });

  function closeMenu() {
    menuCloseBtn.off('click', closeMenu);
    //body.off('click', closeMenu);
    menu.removeClass(ModifierClass.MENU);
    menuOpenBtn.removeClass(ModifierClass.TOGGLE);
  }

})();
