class ProductCardController {
    constructor(KeyDataService, ProductDataService) {
        this.keys = [];
        this.KeyDataService = KeyDataService;
        console.log('Card Controller init');
    }
    clickHandler () {
        this.KeyDataService
            .loadKeys(this.product.product_id)
            .then(keys => {
                this.keys = Array.prototype.concat(keys);
            });
    };
}


ProductCardController.$inject = ['KeyDataService', 'ProductDataService'];
export default ProductCardController;
