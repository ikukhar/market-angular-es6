import ProductsComponent from './products.component';
import ProductsService from 'services/products.service';

const ProductsModule = angular
  .module('app.pages.products', [])
    .component('products', ProductsComponent)
    .config($stateProvider => {
      'ngInject';
      $stateProvider
        .state('products', {
          url: '/products',
          component: 'products',
          resolve: {
            products: ProductsService => ProductsService.getProducts()
          }
        });
    })
    .name;

export default ProductsModule;
