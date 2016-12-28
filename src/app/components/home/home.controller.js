class HomeController {
  constructor() {
    'ngInject';
  }

  $onInit() {
  }

  onSelectCategory($event) {
    this.filterCategories = $event.categories;
  }
}

export default HomeController;
