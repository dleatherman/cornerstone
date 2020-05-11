/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
import utils from '@bigcommerce/stencil-utils';

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

            // TODO: Come back to this, run when item added to cart
            const cartItemsEl = document.querySelectorAll('[data-cart-items]');
            utils.api.cart.getCart({}, (err, response) => {
                let totalItems;
                if (response && cartItemsEl.length > 0) {
                    totalItems = Object.keys(response[0].lineItems.physicalItems).length + Object.keys(response[0].lineItems.customItems).length + Object.keys(response[0].lineItems.digitalItems).length + Object.keys(response[0].lineItems.giftCertificates).length;
                    cartItemsEl.forEach(el => {
                        el.classList.add('is-active');
                        // eslint-disable-next-line no-param-reassign
                        el.innerText = totalItems;
                    });
                }
            });
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
