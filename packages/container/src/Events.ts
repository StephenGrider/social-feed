export default class Events {
  _events: {
    [key: string]: any;
  } = {};

  trigger(name: string, data: any) {
    const callbacks = this._events[name] || [];

    for (let callback of callbacks) {
      callback(data);
    }
  }

  on(name: string, callback: Function) {
    this._events[name] = [...(this._events[name] || []), callback];
  }

  off(name: string, callback: Function) {
    this._events[name] = (this._events[name] || []).filter((cb: Function) => {
      return cb === callback;
    });
  }
}
