
class CategoriesController {
  constructor(CategoriesService) {
    'ngInject';
    this.CategoriesService = CategoriesService;
    this.selectedCategories = this.CategoriesService.getSelected();
  }

  $onInit() {
    this.CategoriesService.getCategories().then(
      categories => {
        this.categories = categories;
      }
    );
    if (this.selectedCategories.length > 0) {
      onSelect.call(this);
    }
  }

  isActive(cat) {
    if (this.selectedCategories.find(x => x.id === cat.id)) {
      return true;
    }
    return false;
  }

  select(cat) {
    this.selectedCategories = this.CategoriesService.select(cat);
    onSelect.call(this);
  }
}

function onSelect() {
  this.onSelect({$event: {categories: this.selectedCategories}});
}

export default CategoriesController;
