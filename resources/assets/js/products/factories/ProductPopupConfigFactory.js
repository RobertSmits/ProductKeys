import productPopupTemplate from '../components/ProductPopup/ProductPopup.html'
import ProductPopupController from '../components/ProductPopup/ProductPopupController'

function ProductPopupConfigFactory() {
    class Config {
        constructor() {
            this.attachTo = angular.element(document.body);
            this.controller = ProductPopupController;
            this.controllerAs = 'ctrl';
            this.disableParentScroll = true;
            this.template = productPopupTemplate;
            this.hasBackdrop = true;
            this.panelClass = 'demo-dialog-example';
            this.trapFocus = true;
            this.zIndex = 150;
            this.clickOutsideToClose = true;
            this.escapeToClose = true;
            this.focusOnOpen = true;
        }
    }

    const get = () => {
        return new Config();
    }

    return {
        get: get
    }
}

export default ProductPopupConfigFactory;
