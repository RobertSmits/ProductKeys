import KeyBottomSheetTemplate from '../keyBottomSheet/KeyBottomSheet.html';
import KeyBottomSheetController from '../keyBottomSheet/KeyBottomSheetController';

class ProductCardController {
    constructor($element, $mdPanel, $mdBottomSheet, KeyDataService, KeyPopupConfigFactory) {
        this.keys = null;
        this.el = $element[0].querySelector('.product-card__key-container')
        this.$mdPanel = $mdPanel;
        this.$mdBottomSheet = $mdBottomSheet;
        this.KeyDataService = KeyDataService;
        this.KeyPopupConfigFactory = KeyPopupConfigFactory;
    }
    $onChanges(changesObj) {
        if (changesObj.selected.currentValue) {
            this.KeyDataService
                .loadKeys(this.product.product_id)
                .then(keys =>
                    this.keys = Array.prototype.concat(keys)
                );
        }
    }
    getScrollHeight() {
        if (!this.selected) return 0;
        else return this.el.scrollHeight;
    }
    getKeyCount() {
        return this.keys ? this.keys.length : this.product.key_count;
    }
    createKey($event) {
        $event.stopPropagation();
        let config = this.KeyPopupConfigFactory.get(this.$mdPanel);
        config.locals = {
            'keys': this.keys,
            'productId': this.product.product_id,
            'edit': false
        };

        this.$mdPanel.open(config);
    }
    editKey(key) {
        let config = this.KeyPopupConfigFactory.get(this.$mdPanel);
        config.locals = {
            'keys': this.keys,
            'productId': this.product.product_id,
            'key': key,
            'edit': true
        };

        this.$mdPanel.open(config);
    }
    deleteKey(key) {
        this.KeyDataService
            .deleteKey(key)
            .then(() => {
                let index = this.keys.indexOf(key);
                if (index === -1) return;
                this.keys.splice(index, 1);
            });
    }
    clickKey($event, key) {
        $event.stopPropagation();
        this.$mdBottomSheet.show({
            template: KeyBottomSheetTemplate,
            controller: KeyBottomSheetController,
            clickOutsideToClose: true
        }).then(action => {
            if (action === 'edit') {
                this.editKey(key)
            } else if (action === 'delete') {
                this.deleteKey(key);
            }
        })
    }
}

ProductCardController.$inject = ['$element', '$mdPanel', '$mdBottomSheet', 'KeyDataService', 'KeyPopupConfigFactory'];
export default ProductCardController;
