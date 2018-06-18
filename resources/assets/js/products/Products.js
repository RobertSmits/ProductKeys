import ProductDataService from './services/ProductDataService';
import KeyDataService from './services/KeyDataService';

import ProductList from './components/list/ProductList';
import ProductCard from './components/card/ProductCard';

import ProductFactory from './factories/ProductFactory';
import ProductPopupConfigFactory from './factories/ProductPopupConfigFactory';

export default angular
    .module("Products", ['ngMaterial'])

    .component(ProductList.name, ProductList.config)
    .component(ProductCard.name, ProductCard.config)

    .service("ProductDataService", ProductDataService)
    .service("KeyDataService", KeyDataService)

    .factory("ProductFactory", ProductFactory)

    .factory("ProductPopupConfigFactory", ProductPopupConfigFactory);
