import template from './ProductList.html';

export default {
    name: 'productList',
    config: {
        bindings: { products: '<', selectedId: '<', onSelect: '&' },
        template: template
    }
};
