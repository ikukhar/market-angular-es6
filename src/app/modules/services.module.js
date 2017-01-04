import angular            from 'angular';
import ProductsService    from 'services/products.service';
import CategoriesService  from 'services/categories.service';
import CartService        from 'services/cart.service';
import AuthService        from 'services/auth.service';
import AccessService      from 'services/access.service';
import EventService       from 'services/event.service';

const ServicesModule = angular
  .module('app.services', [])
    .service('ProductsService', ProductsService)
    .service('CategoriesService', CategoriesService)
    .service('CartService', CartService)
    .service('AuthService', AuthService)
    .service('AccessService', AccessService)
    .service('EventService', EventService)
    .name;

export default ServicesModule;
