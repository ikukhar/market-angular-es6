class HomeController {
  constructor() {
    'ngInject';
  }

  onSelectCategory($event) {
    this.filterCategories = $event.categories;
  }
}

export default HomeController;
