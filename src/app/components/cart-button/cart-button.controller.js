class CartButtonController {
  constructor(CartService) {
    'ngInject';
    this.CartService = CartService;
  }

  count() {
    return this.CartService.countProducts();
  }
}

export default CartButtonController;
