import _ from 'lodash';

class ProductListController {
  constructor(ProductsService, $scope) {
    'ngInject';
    this.ProductsService = ProductsService;
    this.$scope = $scope;
    this.filterCategories = [];
  }

  $onInit() {
    // this.ProductsService.getProducts().then(
    //   products => {
    //     this.products = products;
    //   }
    // );
  }

  filteredProducts() {
    if (_.isEmpty(this.filterCategories) || _.isEmpty(this.products)) {
      return this.products;
    }

    let categoriesIds = this.filterCategories.map(x => x.id);

    return this.products.filter(x => {
      return (categoriesIds.indexOf(x.categoryId) === -1) ? false : true;
    });
  }

  getProducts() {
    return this.filteredProducts();
  }
}

export default ProductListController;
