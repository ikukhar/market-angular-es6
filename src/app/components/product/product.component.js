import ProductController from './product.controller';
import ProductTemplate from './product.html';
import './product.scss';

const ProductComponent = {
  controller: ProductController,
  template: ProductTemplate,
  bindings: {
    product: '<'
  }
};

export default ProductComponent;
