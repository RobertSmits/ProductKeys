//import UsersDataService from 'src/users/services/UsersDataService';

import ProductList from './components/list/ProductList';
import ProductCard from './components/card/ProductCard';

// Define the Angular 'users' module

export default angular
  .module("Products", ['ngMaterial'])

  .component(ProductList.name, ProductList.config)
  .component(ProductCard.name, ProductCard.config);

  //.service("UsersDataService", UsersDataService);
