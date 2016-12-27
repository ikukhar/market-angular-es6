import ProductController from './product.controller';
import ProductTemplate from './product.html';

const ProductComponent = {
  controller: ProductController,
  template: ProductTemplate,
  bindings: {
    product: '<'
  }
};

export default ProductComponent;
