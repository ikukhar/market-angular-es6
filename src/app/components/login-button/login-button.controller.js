class LoginButtonController {
  constructor(AuthService) {
    'ngInject';
    this.AuthService = AuthService;
  }

  isAuthenticated() {
    return this.AuthService.isAuthenticated();
  }

  login() {
    this.AuthService.openModal();
  }

  logout() {
    this.AuthService.logout();
  }
}

export default LoginButtonController;
