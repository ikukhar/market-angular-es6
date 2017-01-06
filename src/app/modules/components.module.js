import NavbarComponent          from 'components/navbar/navbar.component';
import ProductListComponent     from 'components/product-list/product-list.component';
import ProductComponent         from 'components/product/product.component';
import CategoriesComponent      from 'components/categories/categories.component';
import CartButtonComponent      from 'components/cart-button/cart-button.component';
import CheckoutButtonComponent  from 'components/checkout-button/checkout-button.component';
import LoginButtonComponent     from 'components/login-button/login-button.component';

const ComponentsModule = angular
  .module('app.components', [])
    .component('mNavbar', NavbarComponent)
    .component('productList', ProductListComponent)
    .component('product', ProductComponent)
    .component('categories', CategoriesComponent)
    .component('cartButton', CartButtonComponent)
    .component('checkoutButton', CheckoutButtonComponent)
    .component('loginButton', LoginButtonComponent)
    .name;

export default ComponentsModule;
