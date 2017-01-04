class CheckoutButtonController {
  constructor(AuthService, $state) {
    'ngInject';
    this.AuthService = AuthService;
    this.$state = $state;
  }

  checkout() {
    if (this.AuthService.isAuthenticated()) {
      this.$state.go('checkout');
    } else {
      this.AuthService.openModal().then(() => this.$state.go('checkout'));
    }
  }
}

export default CheckoutButtonController;
