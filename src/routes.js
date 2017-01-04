export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/products');

  /** @ngInject */
  $stateProvider
    .state('products', {
      url: '/products',
      component: 'products',
      resolve: {
        products: ProductsService => {
          'ngInject';
          return ProductsService.getProducts();
        }
      }
    })
    .state('cart', {
      url: '/cart',
      component: 'cart',
      resolve: {
        products: CartService => {
          'ngInject';
          return CartService.getProducts();
        }
      }
    })
    .state('checkout', {
      url: '/checkout',
      component: 'checkout',
      onEnter: AccessService => {
        'ngInject';
        return AccessService.isAuthenticated();
      }
    });
}
