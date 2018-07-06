import template from './ProductCard.html';
import ProductCardController from './ProductCardController';

export default {
    name: 'productCard',
    config: {
        bindings: { product: '<', selected: '<' },
        template: template,
        controller: ProductCardController
    }
};
