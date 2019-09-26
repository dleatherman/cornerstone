import $ from 'jquery';
export default function () {
    $('.mobile-filter-container').on('click', () => {
        $('body').addClass('no-padding');
        $('.page, .footer-sm, .header, .instagram-section, .category-title, .category-headline, .mobile-order-sort-container').addClass('hide-element');
        $('.mobile-filters-container').addClass('active');
    });

    $('.large-arrow').on('click', () => {
        $('.mobile-filters-container').removeClass('active');
        $('.page, .footer-sm, .header, .instagram-section, .category-title, .category-headline, .mobile-order-sort-container').removeClass('hide-element');
    });

    $('.mobile-filter-title').on('click', function () {
        $(this).find('.mobile-filter-list').toggleClass('active');
        $(this).find('.count-selected-filters').toggleClass('active');
        $(this).find('.add-icon').toggleClass('active');
        $(this).find('.minus-icon').toggleClass('active');
    });

    const filters = $('.mobile-filters');
    filters.children('.mobile-filter-title').each(function () {
        const selectedNumber = $(this).find('.selected').length;
        $(this).find('.count-selected-filters').text(selectedNumber);
    });
}
