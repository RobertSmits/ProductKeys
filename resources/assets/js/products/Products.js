import ProductDataService from './services/ProductDataService';
import KeyDataService from './services/KeyDataService';

import ProductList from './components/list/ProductList';
import ProductCard from './components/card/ProductCard';

export default angular
    .module("Products", ['ngMaterial'])

    .component(ProductList.name, ProductList.config)
    .component(ProductCard.name, ProductCard.config)

    .service("ProductDataService", ProductDataService)
    .service("KeyDataService", KeyDataService);
