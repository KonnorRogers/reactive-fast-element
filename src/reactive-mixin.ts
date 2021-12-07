import { ReactiveElementInterface, ReactiveController } from "./types"

type ReactiveConstructor<T = {}> = new (...args: any[]) => T;

/**
 * https://lit.dev/docs/composition/mixins/
 * A mixin to make FASTElements use the ReactiveElement lifecycle.
 *
 * Hooks into fast element to provide a Reactive Lifecycle.
 */
export const ReactiveMixin = <T extends ReactiveConstructor<ReactiveElementInterface>>(superClass: T) => {
  class ReactiveClass extends superClass {
    __controllers: Set<ReactiveController>

    constructor (..._args: any[]) {
      super()
      this.__controllers = new Set()
    }

    connectedCallback (): void {
      super.connectedCallback()
      this.__controllers?.forEach((c) => c?.hostConnected?.())
    }

    disconnectedCallback (): void {
      super.disconnectedCallback()
      this.__controllers?.forEach((c) => c?.hostDisconnected?.())
    }
  }

  return ReactiveClass as T
}
