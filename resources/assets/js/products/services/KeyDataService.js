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
    createKey(key) {
        return this.$http({
            method: "POST",
            url: `/api/product/${key.product_id}/keys`,
            data: key
        }).then(response => {
            return response.data;
        }, (response) => {
            throw response.data;
        });
    }
    editKey(key) {
        return this.$http({
            method: "PATCH",
            url: `/api/product/${key.product_id}/keys/${key.product_key_id}`,
            data: key
        }).then(response => {
            return response.data;
        }, (response) => {
            throw response.data;
        });
    }
    deleteKey(key) {
        return this.$http({
            method: "DELETE",
            url: `/api/product/${key.product_id}/keys/${key.product_key_id}`
        }).then(response => {
            return response.data;
        }, (response) => {
            throw response.data;
        });
    }
}

KeyDataService.$inject = ['$http'];
export default KeyDataService;
