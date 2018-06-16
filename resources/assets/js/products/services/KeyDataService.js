class KeyDataService {
    constructor($http) {
        this.$http = $http;
    }
    loadKeys(productId) {
        return this.$http({
            method: "GET",
            url: `/api/product/${productId}/keys`
        }).then(function (response) {
            return response.data;
        });
    }
}

KeyDataService.$inject = ['$http'];
export default KeyDataService;
