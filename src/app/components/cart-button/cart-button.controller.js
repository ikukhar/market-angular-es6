class CartButtonController {
  constructor(CartService) {
    'ngInject';
    this.CartService = CartService;
  }

  count() {
    return this.CartService.totalCount();
  }
}

export default CartButtonController;
