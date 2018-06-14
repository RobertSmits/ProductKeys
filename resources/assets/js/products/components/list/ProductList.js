import template from './ProductList.html'

export default {
    name : 'productList',
    config : {
        bindings: { products: '<' },
        template: template
    }
};
