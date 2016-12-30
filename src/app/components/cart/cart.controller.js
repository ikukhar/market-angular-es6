class CartController {
  constructor(CartService) {
    'ngInject';
    this.CartService = CartService;
  }

  $onInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.CartService.getProducts().then(data => {
      this.products = data;
    });
  }

  totalPrice() {
    return this.CartService.totalPrice();
  }

  up(product) {
    this.CartService.upCount(product);
    this.loadProducts();
  }

  down(product) {
    this.CartService.downCount(product);
    this.loadProducts();
  }

  remove(product) {
    this.CartService.remove(product);
    this.loadProducts();
  }
}

export default CartController;
