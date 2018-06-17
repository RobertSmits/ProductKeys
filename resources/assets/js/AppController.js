class AppController {
    constructor($scope, ProductDataService) {
        console.log('hello world');
        this.$scope = $scope;
        this.ProductDataService = ProductDataService;
        this.init();
    }
    init() {
        this.search = null;
        this.products = [];
        this.selectedId = null;
        this.loadProducts();
    }
    clickHandler(productId) {
        if (this.selectedId == productId) this.selectedId = null;
        else this.selectedId = productId;
        this.$scope.$broadcast('selectBroadcast', this.selectedId);
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
