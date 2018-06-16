class ProductCardController {
    constructor($scope, $element, KeyDataService) {
        this.keys = [];
        this.el = $element[0].querySelector('.product-card__key-container')
        this.KeyDataService = KeyDataService;
        console.log('Card Controller init');
        $scope.$on('selectBroadcast', ($event, message) => {
            if (this.product.product_id == message) {
                this.KeyDataService
                    .loadKeys(this.product.product_id)
                    .then(keys => {
                        this.keys = Array.prototype.concat(keys);
                        setTimeout(() => this.el.style.maxHeight = this.el.scrollHeight + "px", 10);
                    });
            } else {
                this.el.style.maxHeight = null;
            }
        });
    }
}

ProductCardController.$inject = ['$scope', '$element', 'KeyDataService'];
export default ProductCardController;
