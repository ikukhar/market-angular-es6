import CheckoutComponent from './checkout.component';
import AccessService from 'services/access.service';
import './checkout.scss';

const CheckoutModule = angular
  .module('app.pages.checkout', [])
    .component('checkout', CheckoutComponent)
    .config($stateProvider => {
      'ngInject';
      $stateProvider
        .state('checkout', {
          url: '/checkout',
          component: 'checkout',
          onEnter: AccessService => AccessService.isAuthenticated()
        });
    })
    .name;

export default CheckoutModule;
