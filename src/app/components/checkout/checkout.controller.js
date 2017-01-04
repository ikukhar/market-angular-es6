class CheckoutController {
  constructor(CartService, $state) {
    'ngInject';
    this.CartService = CartService;
    this.$state = $state;
  }

  buy() {
    this.CartService.buy()
      .then(() => this.$state.go('products'));
  }
}

export default CheckoutController;
