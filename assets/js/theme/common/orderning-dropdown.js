import $ from 'jquery';
export default function () {
    $(window).click(() => {
        $('body').removeClass('body-change');
        $('.sorting-overlay').removeClass('active');
        $('.product-sort-container').removeClass('product-sort-container-active');
        $('.home-title-container').removeClass('home-title-container-index');
    });

    $('.sub-item').click(function () {
        const value = $(this).data('value');
        $('#sort').val(value);
        $('#sortForm').submit();
    });

    $('.sort-container').click((event) => {
        event.stopPropagation();
        if($('.sort-container').hasClass("active")) {
            $('.sort-container').removeClass('active');
        } else {
            $('.sort-container').addClass('active');
        }
    });

    $('.product-sort-container > .product-sort-main-item').click((event) => {
        $('body').addClass('body-change');
        $('.sorting-overlay').addClass('active');
        $('.product-sort-container').addClass('product-sort-container-active');
        $('.home-title-container').addClass('home-title-container-index');
        event.stopPropagation();
    });
}

