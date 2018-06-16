class AppController {
    constructor($scope, ProductDataService) {
        console.log('hello world');
        this.products = [];
        this.selectedId = null;
        this.$scope = $scope;
        ProductDataService
            .loadProducts()
            .then(products => {
                this.products = Array.prototype.concat(products);
            });
    }
    clickHandler(productId) {
        if (this.selectedId == productId) this.selectedId = null;
        else this.selectedId = productId;
        this.$scope.$broadcast('selectBroadcast', this.selectedId);
    }
}

AppController.$inject = ['$scope', 'ProductDataService'];
export default AppController;
