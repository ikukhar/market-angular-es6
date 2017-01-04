class CartService {
  constructor(ProductsService, localStorageService, $q) {
    'ngInject';
    this.ProductsService = ProductsService;
    this.localStorageService = localStorageService;
    this.$q = $q;
    this.cart = [];
    this.totals = {
      count: 0,
      price: 0
    };
    this.loadFromCache();
  }

  add(product) {
    if (this.cart[product.id]) {
      this.changeProductCount(product, +1);
    } else {
      this.cart[product.id] = {
        id: product.id,
        count: 1,
        price: product.price,
        totalPrice: product.price

      };
    }

    this.save();
  }

  remove(product) {
    if (this.cart[product.id]) {
      delete this.cart[product.id];
    }
    this.save();
  }

  cleanCart() {
    this.cart = {};
    this.save();
  }

  upCount(product) {
    this.changeProductCount(product, +1);
    this.save();
  }

  downCount(product) {
    if (this.cart[product.id].count > 1) {
      this.changeProductCount(product, -1);
      this.save();
    }
  }

  changeProductCount(product, count) {
    let cartProduct = this.cart[product.id];
    cartProduct.count += count;
    cartProduct.totalPrice = cartProduct.count * cartProduct.price;
  }

  getProducts() {
    let ids = Object.keys(this.cart);
    return this.ProductsService.getByIds(ids).then(
      products => {
        products.forEach(x => {
          x.count = this.cart[x.id].count;
          x.price = this.cart[x.id].price;
          x.totalPrice = this.cart[x.id].totalPrice;
        });
        return products;
      }
    );
  }

  totalCount() {
    return this.totals.count;
  }

  totalPrice() {
    return this.totals.price;
  }

  save() {
    this.localStorageService.set('ma-cart', JSON.stringify(this.cart));
    this.calcTotal();
  }

  loadFromCache() {
    this.cart = JSON.parse(this.localStorageService.get('ma-cart')) || {};
    this.calcTotal();
  }

  calcTotal() {
    this.totals.count = Object.keys(this.cart).length;
    this.totals.price = Object.values(this.cart).reduce(((sum, x) => sum + x.totalPrice), 0);
  }

  buy() {
    let deffered = this.$q.defer();
    this.cleanCart();
    deffered.resolve();
    return deffered.promise;
  }
}

export default CartService;
