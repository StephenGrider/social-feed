export default class Events {
  _events = {};

  trigger(name, data) {
    const callbacks = this._events[name] || [];

    for (let callback of callbacks) {
      callback(data);
    }
  }

  on(name, callback) {
    this._events[name] = [...(this._events[name] || []), callback];
  }

  off(name, callback) {
    this._events[name] = (this._events[name] || []).filter((cb) => {
      return cb === callback;
    });
  }
}
