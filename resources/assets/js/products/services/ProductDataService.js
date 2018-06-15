class ProductDataService {
    constructor($http) {
        this.$http = $http;
    }
    loadProducts() {
        return this.$http({
            method: "GET",
            url: "/api/product"
        })
        .then(function (response) {
            return response.data;
        });
    }
}


ProductDataService.$inject = ['$http'];
export default ProductDataService;
