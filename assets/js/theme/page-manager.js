/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
export default class PageManager {
    constructor(context) {
        this.context = context;
    }

    type() {
        return this.constructor.name;
    }

    onReady() {
    }

    static load(context) {
        const page = new this(context);

        $(document).ready(() => {
            page.onReady.bind(page)();
            /mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(() => {
                if (!pageYOffset) window.scrollTo(0, 1);
            }, 1000);
        });

        if (context.template === 'pages/home') {
            const cartUrl = 'https://peppertogether.com/cart.php';
            const basket = $('.bundle-products').data('bundle-products');
            const addMultipleItemsToCart = function () {
                if (basket.length) {
                    for (let i = 0; i < basket.length; i++) {
                        $.ajax({
                            type: 'GET',
                            async: false,
                            // eslint-disable-next-line prefer-template
                            url: cartUrl + '?action=add&product_id=' + basket[i] + '&fastcart=1&ajaxsubmit=1',
                            success: (data) => {
                                const obj = JSON.parse($(data).html());
                                if (!obj.success) {
                                    // eslint-disable-next-line no-console
                                    console.log('Error', obj);
                                }
                            },
                        });
                    }
                }
                window.location.replace(cartUrl);
            };
            $('.bundle-products').click(() => {
                $(this).addClass('running');
                addMultipleItemsToCart();
            });
        }
    }
}
