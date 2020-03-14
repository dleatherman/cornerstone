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
    }
}
