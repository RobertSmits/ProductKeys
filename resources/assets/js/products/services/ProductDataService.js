class ProductDataService {
    constructor($http) {
        this.$http = $http;
    }
    loadProducts(searchStrign) {
        return this.$http({
            method: "GET",
            url: `/api/product?search=${searchStrign || ''}`
        }).then(response => {
            return response.data;
        });
    }
    createProduct(product) {
        return this.$http({
            method: "POST",
            url: "/api/product",
            data: product
        }).then(response => {
            return response.data;
        }, (response) => {
            throw response.data;
        });
    }
}

ProductDataService.$inject = ['$http'];
export default ProductDataService;
