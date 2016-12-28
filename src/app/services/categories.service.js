import _ from 'lodash';

class CategoriesService {
  constructor($http, $log, localStorageService) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.localStorageService = localStorageService;
  }

  getCategories() {
    return this.$http.get('data/categories.json').then(
      data => {
        return data.data;
      },
      error => {
        this.$log.log(error);
      });
  }

  select(cat) {
    let selectedCategories = this.getSelected();
    let i = selectedCategories.findIndex(x => x.id === cat.id);
    if (i === -1) {
      selectedCategories.push(cat);
    } else {
      selectedCategories.splice(i, 1);
    }

    this.localStorageService.set('selectedCategories',  JSON.stringify(selectedCategories));

    return selectedCategories;
  }

  getSelected() {
    let selectedCategories = JSON.parse(this.localStorageService.get('selectedCategories'));
    if (_.isEmpty(selectedCategories)) {
      selectedCategories = [];
    }
    return selectedCategories;
  }

}

export default CategoriesService;
