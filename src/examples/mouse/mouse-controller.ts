import { ReactiveControllerHost } from '../../'

export class MouseController {
  host: ReactiveControllerHost
  pos = { x: 0, y: 0 }

  _onMouseMove = ({ clientX, clientY }: MouseEvent): void => {
    this.pos = { x: clientX, y: clientY }
    this.host.requestUpdate()
  }

  constructor (host: ReactiveControllerHost) {
    this.host = host
    host.addController(this)
  }

  hostConnected (): void {
    window.addEventListener('mousemove', this._onMouseMove)
  }

  hostDisconnected (): void {
    window.removeEventListener('mousemove', this._onMouseMove)
  }
}
