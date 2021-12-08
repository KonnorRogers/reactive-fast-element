import {html, customElement} from '@microsoft/fast-element';
import {ClockController} from './clock-controller';
import {ReactiveFASTElement, ReactiveControllerHost} from "../../";

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
});

const template = html<ClockElement>`
  <div>Clock 1: ${x => x.timeOne()}</div>
  <div>Clock 2: ${x => x.timeTwo()}</div>
`

@customElement({
  name: 'dual-clock-element',
  template,
})
export class ClockElement extends ReactiveFASTElement implements ReactiveControllerHost {
  private clockOne: ClockController
  private clockTwo: ClockController

  constructor () {
    super()

    // Create the controller and store it
    this.clockOne = new ClockController(this, 100);
    this.clockTwo = new ClockController(this, 100);
  }

  timeOne (): string {
    return timeFormat.format(this.clockOne.value)
  }

  timeTwo (): string {
    return timeFormat.format(this.clockTwo.value)
  }
}
