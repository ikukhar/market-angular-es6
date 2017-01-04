class AuthService {
  constructor(localStorageService, ngDialog, $q, EventService) {
    'ngInject';
    this.localStorageService = localStorageService;
    this.ngDialog = ngDialog;
    this.$q = $q;
    this.EventService = EventService;
  }

  login() {
    this.saveToken('test-token');
    this.EventService.notify('login');
  }

  logout() {
    this.removeToken();
    this.EventService.notify('logout');
  }

  isAuthenticated() {
    return Boolean(this.getToken());
  }

  saveToken(token) {
    this.localStorageService.set('ma-token', token);
  }

  removeToken() {
    this.localStorageService.remove('ma-token');
  }

  getToken() {
    return this.localStorageService.get('ma-token');
  }

  openModal() {
    let dialog = this.ngDialog.open({
      template:
          `<div>
          	<h2>Log In</h2>
          	<div class="ngdialog-buttons">
          		<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click=closeThisDialog(0)>Cancel</button>
          		<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=closeThisDialog(1)>Log In</button>
            </div>
          </div>`,
      plain: true
    });

    let deffered = this.$q.defer();
    dialog.closePromise.then(data => {
      if (data.value === 1) {
        this.login();
        return deffered.resolve();
      }
    });

    return deffered.promise;
  }

}

export default AuthService;
