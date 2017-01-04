import angular                  from 'angular';
import ProductsComponent        from 'components/products/products.component';
import NavbarComponent          from 'components/navbar/navbar.component';
import ProductListComponent     from 'components/product-list/product-list.component';
import ProductComponent         from 'components/product/product.component';
import CategoriesComponent      from 'components/categories/categories.component';
import CartComponent            from 'components/cart/cart.component';
import CartButtonComponent      from 'components/cart-button/cart-button.component';
import CheckoutButtonComponent  from 'components/checkout-button/checkout-button.component';
import CheckoutComponent        from 'components/checkout/checkout.component';
import LoginButtonComponent     from 'components/login-button/login-button.component';

const ComponentsModule = angular
  .module('app.components', [])
    .component('products', ProductsComponent)
    .component('mNavbar', NavbarComponent)
    .component('productList', ProductListComponent)
    .component('product', ProductComponent)
    .component('categories', CategoriesComponent)
    .component('cart', CartComponent)
    .component('cartButton', CartButtonComponent)
    .component('checkoutButton', CheckoutButtonComponent)
    .component('checkout', CheckoutComponent)
    .component('loginButton', LoginButtonComponent)
    .name;

export default ComponentsModule;
