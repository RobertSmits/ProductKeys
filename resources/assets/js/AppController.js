class AppController {
    constructor($scope, $mdPanel, ProductDataService, ProductPopupConfigFactory) {
        this.$scope = $scope;
        this.$mdPanel = $mdPanel;
        this.ProductDataService = ProductDataService;
        this.ProductPopupConfigFactory = ProductPopupConfigFactory;
    }
    $onInit() {
        this.search = null;
        this.products = [];
        this.selectedId = null;
        this.loadProducts();
    }
    clickHandler(productId) {
        if (this.selectedId === productId) this.selectedId = null;
        else this.selectedId = productId;
    }
    clearSearch() {
        this.search = null;
        this.loadProducts()
    }
    loadProducts() {
        this.selectedId = null;
        this.ProductDataService
            .loadProducts(this.search)
            .then(products => {
                this.products = Array.prototype.concat(products);
            });
    }
    createNewProduct($event) {
        $event.stopPropagation();
        let config = this.ProductPopupConfigFactory.get(this.$mdPanel);
        config.locals = {
            'products': this.products
        },

        this.$mdPanel.open(config);
    };
}

AppController.$inject = ['$scope', '$mdPanel', 'ProductDataService', 'ProductPopupConfigFactory'];
export default AppController;
