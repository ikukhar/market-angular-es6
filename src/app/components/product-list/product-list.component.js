import ProductListController from './product-list.controller';
import ProductListTemplate from './product-list.html';

const ProductListComponent = {
  controller: ProductListController,
  template: ProductListTemplate,
  bindings: {
    filterCategories: '<'
  }
};

export default ProductListComponent;
