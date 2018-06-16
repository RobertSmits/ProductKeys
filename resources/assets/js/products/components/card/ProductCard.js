import template from './ProductCard.html'
import ProductCardController from './ProductCardController'

export default {
    name: 'productCard',
    config: {
        bindings: { product: '<', selected: '<', select : '&onSelected' },
        template: template,
        controller: ProductCardController
    }
};
