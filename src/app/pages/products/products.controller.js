class ProductsController {
  constructor() {
    'ngInject';
  }

  onSelectCategory($event) {
    this.filterCategories = $event.categories;
  }
}

export default ProductsController;
