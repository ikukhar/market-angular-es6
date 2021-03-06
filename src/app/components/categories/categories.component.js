import CategoriesController from './categories.controller';
import CategoriesTemplate from './categories.html';
import './categories.scss';

const CategoriesComponent = {
  controller: CategoriesController,
  template: CategoriesTemplate,
  bindings: {
    onSelect: '&'
  }
};

export default CategoriesComponent;
