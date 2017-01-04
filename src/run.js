export default run;
/** @ngInject */
function run($transitions, AccessService, $log, EventService, usSpinnerService) {
  EventService.on('logout', () => {
    $transitions._router.stateService.reload();
  });

  $transitions.onStart({ }, () => {
    usSpinnerService.spin('mainSpin');
  });

  $transitions.onFinish({ }, () => {
    usSpinnerService.stop('mainSpin');
  });

  $transitions.onError({}, trans => {
    trans.promise.catch(error => {
      switch (error) {
        case AccessService.UNAUTHORIZED:
          break;

        case AccessService.FORBIDDEN:
          break;

        default:
          $log.warn("$stateChangeError event catched");
          break;
      }
      return trans.router.stateService.go('products');
    });
  });
}
