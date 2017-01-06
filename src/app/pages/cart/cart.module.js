import CartComponent from './cart.component';
import CartService from './cart.service';
import './cart.scss';

const CartModule = angular
  .module('app.pages.cart', [])
    .component('cart', CartComponent)
    .service('CartService', CartService)
    .config($stateProvider => {
      'ngInject';
      $stateProvider
        .state('cart', {
          url: '/cart',
          component: 'cart',
          resolve: {
            products: CartService => CartService.getProducts()
          }
        });
    })
    .name;

export default CartModule;
