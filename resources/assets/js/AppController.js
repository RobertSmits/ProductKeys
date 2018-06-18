class AppController {
    constructor($scope, ProductDataService) {
        this.$scope = $scope;
        this.ProductDataService = ProductDataService;
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
}

AppController.$inject = ['$scope', 'ProductDataService'];
export default AppController;
