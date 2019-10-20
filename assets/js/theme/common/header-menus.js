import $ from 'jquery';

export default function () {
    $('.navProduct, .ShopMenu').hover(() => {
        $('.ShopMenu').addClass('active');
    }, () => {
        $('.ShopMenu').removeClass('active');
    });

    $('.navStories, .StoriesMenu').hover(() => {
        $('.StoriesMenu').addClass('active');
    }, () => {
        $('.StoriesMenu').removeClass('active');
    });

    $('.home-explore-senses, .mobileMenu-toggle-senses').click(() => {
        $('.mobileMenu-toggle').toggleClass('hide');
        $('.mobileMenu-toggle-senses').toggleClass('hide');
        $('.mobileMenu-toggle-senses').toggleClass('is-open');

        $('.mobile-senses-container').toggleClass('active');
        $('#reamaze-widget').toggleClass('hide-chat');
        // $('.header').toggleClass('fixed');
    });

    $('.mobileMenu-toggle').click(() => {
        $('#reamaze-widget').toggleClass('hide-chat');
        // $('.header').toggleClass('fixed');
    });

    $('.icon-search-results').click(() => {
        $('#search-page-form').submit();
    });
}
