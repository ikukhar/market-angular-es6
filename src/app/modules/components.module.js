import angular              from 'angular';
import HomeComponent        from 'components/home/home.component';
import NavbarComponent      from 'components/navbar/navbar.component';
import ProductListComponent from 'components/product-list/product-list.component';
import ProductComponent     from 'components/product/product.component';

const ComponentsModule = angular
  .module('app.components', [])
    .component('home', HomeComponent)
    .component('mNavbar', NavbarComponent)
    .component('productList', ProductListComponent)
    .component('product', ProductComponent)
    .name;

export default ComponentsModule;
