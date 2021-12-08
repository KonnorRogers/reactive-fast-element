import { ClockController } from "./clock-controller"
import { ReactiveController, ReactiveControllerHost } from "../../"

export class DualClockController implements ReactiveController {
  host: ReactiveControllerHost

  private clock1: ClockController;
  private clock2: ClockController;

  constructor(host: ReactiveControllerHost, delay1: number, delay2: number) {
    this.host = host
    this.clock1 = new ClockController(host, delay1);
    this.clock2 = new ClockController(host, delay2);
  }

  get time1() { return this.clock1.value; }
  get time2() { return this.clock2.value; }
}
