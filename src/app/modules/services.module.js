import angular from 'angular';
import ProductsService from 'services/products.service.js';

const ServicesModule = angular
  .module('app.services', [])
    .service('ProductsService', ProductsService)
    .name;

export default ServicesModule;
