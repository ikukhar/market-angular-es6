class ProductController {
  constructor(CartService, Notification) {
    'ngInject';
    this.CartService = CartService;
    this.Notification = Notification;
  }

  addToCart() {
    this.CartService.add(this.product);
    this.Notification.warning('Product added to cart');
  }
}

export default ProductController;
