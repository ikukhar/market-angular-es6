class ProductListController {
  constructor(ProductsService) {
    'ngInject';
    this.productsService = ProductsService;
  }

  $onInit() {
    this.productsService.getProducts().then(
      products => {
        this.products = products;
      }
    );
  }
}

export default ProductListController;
