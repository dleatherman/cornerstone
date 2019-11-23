/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/form-utils';
import utils from '@bigcommerce/stencil-utils';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        const $reviewForm = classifyForm('.writeReview-form');
        const review = new Review($reviewForm);

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        this.productRevealHandlerMobile();


        this.getProductViewById();
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    productRevealHandlerMobile() {
        const $productRevealBtns = $('a.bundle__slide--reveal');
        // console.log($productRevealBtns);
        if ($productRevealBtns.length > 0) {
            $productRevealBtns.on('click', (e) => {
                e.preventDefault();
                const $activate = $(e.target.closest('.bundle__slide--outer'));
                $activate.toggleClass('revealed');
            });
        }
    }

    getProductViewById() {
        // eslint-disable-next-line no-console
        console.log('--bundle-product--');
        const $productsToLoad = $('.bundle__slide[data-product-id]');

        if ($productsToLoad.length > 0) {
            $.each($productsToLoad, (i, prod) => {
                const productId = $(prod).data('product-id');

                if (productId) {
                    utils.api.product.getById(productId, { template: 'products/bundle-slide' }, (err, response) => {
                        // eslint-disable-next-line no-console
                        // console.log(response);
                        $productsToLoad[i].innerHTML = response;
                        return new ProductDetails($productsToLoad[i]);
                    });
                }
            });
        }
    }
}
