// import faker from 'faker';

class ProductsService {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }

  getProducts() {
    return this.$http.get('data/products.json').then(
      data => {
        return data.data.products;
      },
      error => {
        this.$log.log(error);
      });
  }

  getProduct(id) {
    return this.$http.get('data/products.json').then(
      data => {
        let products = data.data.products;
        return products.find(p => p.id === id);
      },
      error => {
        this.$log.log(error);
      });
  }
}

export default ProductsService;
