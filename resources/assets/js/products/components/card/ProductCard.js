import template from './ProductCard.html'
import ProductCardController from './ProductCardController'

export default {
    name : 'productCard',
    config : {
        bindings: { product: '<' },
        template: template,
        controller: ProductCardController
    }
};
