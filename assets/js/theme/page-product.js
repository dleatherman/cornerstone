/*
 Import all product specific js
 */
import PageManager from './page-manager';
import utils from '@bigcommerce/stencil-utils';

export default class PageProduct extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
    }

    onReady() {
        this.getProductViewById();
    }

    getProductViewById() {
        const $productsToLoad = $('section[data-product-id]');

        if ($productsToLoad.length > 0) {
            $.each($productsToLoad, (i, prod) => {
                const productId = $(prod).data('product-id');

                utils.api.product.getById(productId, { template: 'products/product-view-bundle', buy: false }, (err, response) => {
                    // eslint-disable-next-line no-console
                    // console.log(response);
                    $productsToLoad[i].innerHTML = response;
                });
            });
        }
    }
}
