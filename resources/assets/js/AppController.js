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
        $event.stopPropagation()
        let position = this.$mdPanel.newPanelPosition()
            .absolute()
            .center();

        let animation = this.$mdPanel.newPanelAnimation()
            .duration(300)
            .openFrom('.product-fab')
            .closeTo('.product-fab')
            .withAnimation(this.$mdPanel.animation.SCALE);

        let config = this.ProductPopupConfigFactory.get();
        config.position = position;
        config.animation = animation;
        config.locals = {
            'products': this.products
        },

        this.$mdPanel.open(config);
    };
}

AppController.$inject = ['$scope', '$mdPanel', 'ProductDataService', 'ProductPopupConfigFactory'];
export default AppController;
