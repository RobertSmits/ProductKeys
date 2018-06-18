class ProductPopupController {
    constructor(mdPanelRef, ProductFactory, ProductDataService) {
        this.mdPanelRef = mdPanelRef;
        this.product = ProductFactory.get();
        this.ProductDataService = ProductDataService;
    }
    createProduct() {
        this.ProductDataService.createProduct(this.product).then(productId => {
            this.product.product_id = productId;
            this.products.push(this.product);
            this.mdPanelRef.close();
        }).catch(excepton => {
            this.errors = excepton.errors;
        });
    }
    closeDialog() {
        this.mdPanelRef.close();
    }
}

ProductPopupController.$inject = ['mdPanelRef', 'ProductFactory', 'ProductDataService'];
export default ProductPopupController;
