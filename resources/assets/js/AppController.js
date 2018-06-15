class AppController {
    constructor(ProductDataService) {
        console.log('hello world');
        this.products = [ ];
        ProductDataService
            .loadProducts()
            .then(products => {
                this.products = Array.prototype.concat(products);
            });
    }
}

AppController.$inject = ['ProductDataService'];
export default AppController;
