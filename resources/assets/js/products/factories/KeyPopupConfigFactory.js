import KeyPopupTemplate from '../components/keyPopup/KeyPopup.html'
import KeyPopupController from '../components/keyPopup/KeyPopupController';

function KeyPopupConfigFactory() {
    class Config {
        constructor($mdPanel) {
            this.attachTo = angular.element(document.body);
            this.controller = KeyPopupController;
            this.controllerAs = 'ctrl';
            this.disableParentScroll = true;
            this.template = KeyPopupTemplate;
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
                .openFrom('.product-card__fab')
                .closeTo('.product-card__fab')
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

export default KeyPopupConfigFactory;
