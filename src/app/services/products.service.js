class ProductsService {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }

  getProducts() {
    return this.$http.get('data/products.json').then(
      data => {
        data.data.forEach(x => x.id = x.id.toString());
        return data.data;
      },
      error => {
        this.$log.log(error);
      });
  }

  // getProduct(id) {
  //   return this.getProducts().then(
  //     products => {
  //       return products.find(p => p.id === id);
  //     });
  // }

  getByIds(ids) {
    return this.getProducts().then(products => {
        return products.filter(x => {
          return (ids.indexOf(x.id) === -1) ? false : true;
        });
      });
  }
}

export default ProductsService;
