import $ from 'jquery';

export default function () {
  $('.secondary-menu-item').hover(function () {
    let currentCategory = $('.home-container').data('current-category') || '';
    const el = $(this);
    const name = el.data('name').toLowerCase();
    currentCategory = currentCategory.replace('kits', '').trim();
    $('.home-container').removeClass(currentCategory);
    $('.home-container').addClass(`${name}-background`);
  }, function () {
    let currentCategory = $('.home-container').data('current-category') || '';
    const el = $(this);
    const name = el.data('name').toLowerCase();
    currentCategory = currentCategory.replace('kits', '').trim();
    $('.home-container').removeClass(`${name}-background`);
    $('.home-container').addClass(currentCategory);
  });
}
