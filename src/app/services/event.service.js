class EventService {
  constructor($q) {
    'ngInject';
    this.events = {
      login: $q.defer(),
      logout: $q.defer()
    };
  }

  on(event, callback) {
    let promise = this.events[event].promise;
    promise.then(null, null, callback);
    return promise;
  }

  notify(event) {
    this.events[event].notify();
  }
}

export default EventService;
