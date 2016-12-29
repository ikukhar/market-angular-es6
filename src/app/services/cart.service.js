class CartService {
  constructor(ProductsService, localStorageService) {
    'ngInject';
    this.ProductsService = ProductsService;
    this.localStorageService = localStorageService;
    this.ids = [];
    this.countProductsInCart = 0;
    this.loadFromCache();
  }

  add(product) {
    this.ids.push(product.id);
    this.save();
  }

  remove(product) {
    let idx = this.ids.indexOf(product.id);
    if (idx > -1) {
      this.ids.slice(idx, 1);
      this.save();
    }
  }

  getProducts() {
    return this.ProductsService.getByIds(this.ids);
  }

  countProducts() {
    return this.countProductsInCart;
  }

  loadFromCache() {
    this.ids = this.localStorageService.get('ma-cart') || [];
    this.calc();
  }

  save() {
    this.localStorageService.set('ma-cart', this.ids);
    this.calc();
  }

  calc() {
    this.countProductsInCart = this.ids.length;
  }
}

export default CartService;
