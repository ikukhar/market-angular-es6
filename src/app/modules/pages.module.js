import CartModule from 'pages/cart/cart.module';
import CheckoutModule from 'pages/checkout/checkout.module';
import ProductsModule from 'pages/products/products.module';

const PagesModule = angular
  .module('app.pages', [
    CartModule,
    CheckoutModule,
    ProductsModule
  ]).name;

export default PagesModule;
