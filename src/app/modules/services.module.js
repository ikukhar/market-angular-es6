import angular from 'angular';
import ProductsService from 'services/products.service.js';
import CategoriesService from 'services/categories.service.js';

const ServicesModule = angular
  .module('app.services', [])
    .service('ProductsService', ProductsService)
    .service('CategoriesService', CategoriesService)
    .name;

export default ServicesModule;
