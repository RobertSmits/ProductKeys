import ProductDataService from './services/ProductDataService';
import KeyDataService from './services/KeyDataService';

import ProductList from './components/productList/ProductList';
import ProductCard from './components/productCard/ProductCard';

import ProductFactory from './factories/ProductFactory';
import KeyFactory from './factories/KeyFactory';

import ProductPopupConfigFactory from './factories/ProductPopupConfigFactory';
import KeyPopupConfigFactory from './factories/KeyPopupConfigFactory';
import Clipboard from './factories/Clipboard';

export default angular
    .module("Products", ['ngMaterial'])

    .component(ProductList.name, ProductList.config)
    .component(ProductCard.name, ProductCard.config)

    .service("ProductDataService", ProductDataService)
    .service("KeyDataService", KeyDataService)

    .factory("ProductFactory", ProductFactory)
    .factory("KeyFactory", KeyFactory)

    .factory("ProductPopupConfigFactory", ProductPopupConfigFactory)
    .factory("KeyPopupConfigFactory", KeyPopupConfigFactory)
    .factory("Clipboard", Clipboard)
