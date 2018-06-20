import ProductPopupTemplate from '../components/productPopup/ProductPopup.html'
import ProductPopupController from '../components/productPopup/ProductPopupController'

function ProductPopupConfigFactory() {
    class Config {
        constructor($mdPanel) {
            this.attachTo = angular.element(document.body);
            this.controller = ProductPopupController;
            this.controllerAs = 'ctrl';
            this.disableParentScroll = true;
            this.template = ProductPopupTemplate;
            this.hasBackdrop = true;
            this.panelClass = 'md-dialog__container';
            this.trapFocus = true;
            this.zIndex = 150;
            this.clickOutsideToClose = true;
            this.escapeToClose = true;
            this.focusOnOpen = true;

            this.position = $mdPanel.newPanelPosition()
                .absolute()
                .center();

            this.animation = $mdPanel.newPanelAnimation()
                .duration(300)
                .openFrom('.product-fab')
                .closeTo('.product-fab')
                .withAnimation($mdPanel.animation.SCALE);

        }
    }

    const get = ($mdPanel) => {
        return new Config($mdPanel);
    }

    return {
        get: get
    }
}

export default ProductPopupConfigFactory;
