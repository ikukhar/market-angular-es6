class AccessService {
  constructor($q, AuthService) {
    this.$q = $q;
    this.AuthService = AuthService;
    this.OK = 200;
    // "we don't know who you are, so we can't say if you're authorized to access
    // this resource or not yet, please sign in first"
    this.UNAUTHORIZED = 401;
    // "we know who you are, and your profile does not allow you to access this resource"
    this.FORBIDDEN = 403;
  }

  isAuthenticated() {
    if (this.AuthService.isAuthenticated()) {
      return this.OK;
    }
    return this.$q.reject(this.UNAUTHORIZED);
  }

}

export default AccessService;
