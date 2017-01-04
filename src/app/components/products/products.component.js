import ProductsController from './products.controller';
import ProductsTemplate from './products.html';

const ProductsComponent = {
  template: ProductsTemplate,
  controller: ProductsController,
  bindings: {
    products: '<'
  }
};

export default ProductsComponent;
