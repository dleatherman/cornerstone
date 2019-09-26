import $ from 'jquery';

export default function () {
  $('.footer-link').click((e) => {
    var term = e.target.parentElement.id;
    if ($(`#${term}-link`).hasClass("active")) {
      $(`#${term}-link`).removeClass("active");
    } else {
      $('.footer-info-col').removeClass("active");
      $(`#${term}-link`).addClass("active");
    }
  });
}
