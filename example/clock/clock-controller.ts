import {FASTReactiveController, FASTReactiveControllerHost} from 'fast-element-reactivity';

export class ClockController implements FASTReactiveController {
  host: FASTReactiveControllerHost;

  value = new Date();
  timeout: number;
  private _timerID?: number;

  constructor(host: FASTReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);
    this.timeout = timeout;
  }
  hostConnected() {
    // Start a timer when the host is connected
    this._timerID = window.setInterval(() => {
      this.value = new Date();
      // Update the host with new value
      this.host.requestUpdate();
    }, this.timeout);
  }
  hostDisconnected() {
    // Clear the timer when the host is disconnected
    window.clearInterval(this._timerID);
    this._timerID = undefined;
  }
}
