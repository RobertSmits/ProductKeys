class KeyPopupController {
    constructor(mdPanelRef, KeyFactory, KeyDataService) {
        this.mdPanelRef = mdPanelRef;
        this.KeyDataService = KeyDataService;
        if (this.edit) {
            this.workingKey = Object.assign({}, this.key);
        } else {
            this.workingKey = KeyFactory.get();
            this.workingKey.product_id = this.productId
        }
    }
    saveKey() {
        if (this.edit) this.editKey();
        else this.createKey();
    }
    createKey() {
        this.KeyDataService
            .createKey(this.workingKey)
            .then(keyId => {
                this.workingKey.product_key_id = keyId;
                this.keys.push(this.workingKey);
                this.mdPanelRef.close();
            }).catch(excepton =>
                this.errors = excepton.errors
            );
    }
    editKey() {
        this.KeyDataService
            .editKey(this.workingKey)
            .then(() => {
                for (let prop in this.workingKey) {
                    if (!this.workingKey.hasOwnProperty(prop)) continue;
                    this.key[prop] = this.workingKey[prop];
                }
                this.mdPanelRef.close();
            }).catch(excepton =>
                this.errors = excepton.errors
            );
    }
    closeDialog() {
        this.mdPanelRef.close();
    }
}

KeyPopupController.$inject = ['mdPanelRef', 'KeyFactory', 'KeyDataService'];
export default KeyPopupController;
