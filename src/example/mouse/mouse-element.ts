import {customElement, html} from '@microsoft/fast-element';
import { ReactiveFASTElement } from '../../';
import {MouseController} from './mouse-controller.js';

const template = html<MouseElement>`
  <h3>The mouse is at:</h3>
  <pre>
    x: ${x => x.posX}
    y: ${x => x.posY}
  </pre>
`
@customElement({
  name: 'mouse-element',
  template
})
export class MouseElement extends ReactiveFASTElement {
  private mouse = new MouseController(this);

  get posX () {
    return this.mouse.pos.x
  }

  get posY () {
    return this.mouse.pos.y
  }
}
