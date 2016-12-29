import angular from 'angular';
import ProductsService from 'services/products.service';
import CategoriesService from 'services/categories.service';
import CartService from 'services/cart.service';

const ServicesModule = angular
  .module('app.services', [])
    .service('ProductsService', ProductsService)
    .service('CategoriesService', CategoriesService)
    .service('CartService', CartService)
    .name;

export default ServicesModule;
