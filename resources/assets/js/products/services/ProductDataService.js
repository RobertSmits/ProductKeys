class ProductDataService {
    constructor($http) {
        this.$http = $http;
    }
    loadProducts(searchStrign) {
        return this.$http({
            method: "GET",
            url: `/api/product?search=${searchStrign || ''}`
        }).then(function (response) {
            return response.data;
        });
    }
}

ProductDataService.$inject = ['$http'];
export default ProductDataService;
