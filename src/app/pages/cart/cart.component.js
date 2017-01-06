import CartController from './cart.controller';
import CartTemplate   from './cart.html';

const CartComponent = {
  controller: CartController,
  template: CartTemplate,
  bindings: {
    products: '<'
  }
};

export default CartComponent;
