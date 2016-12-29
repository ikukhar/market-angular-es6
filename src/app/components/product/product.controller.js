class ProductController {
  constructor(CartService) {
    'ngInject';
    this.CartService = CartService;
  }

  addToCart() {
    this.CartService.add(this.product);
  }
}

export default ProductController;
