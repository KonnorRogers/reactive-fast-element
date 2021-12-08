import { FASTElement, DOM } from "@microsoft/fast-element"
import { Constructor, ReactiveController, ReactiveControllerHost } from "./types"

/**
 * https://lit.dev/docs/composition/mixins/
 * A mixin to make FASTElements use the ReactiveElement lifecycle.
 *
 * Hooks into fast element to provide a Reactive Lifecycle for compatibility with
 *   ReactiveControllers
 */
export const FASTReactiveMixin = <T extends Constructor<FASTElement>>(superClass: T) => {
  class ReactiveClass extends superClass implements ReactiveControllerHost {
    __controllers__?: Set<ReactiveController>

    constructor (..._args: any[]) {
      super()
      if (this.__controllers__ == null) this.__controllers__ = new Set<ReactiveController>()
    }

    addController (element: ReactiveController): void {
      if (this.__controllers__ == null) this.__controllers__ = new Set<ReactiveController>()
      this.__controllers__.add(element)
    }

    removeController (element: ReactiveController): void {
      if (this.__controllers__ == null) this.__controllers__ = new Set<ReactiveController>()
      this.__controllers__.delete(element)
    }

    requestUpdate (): void {
      DOM.queueUpdate(() => {})
    }

    updateComplete (): Promise<boolean> {
      return DOM.nextUpdate().then(() => true)
    }

    connectedCallback (): void {
      super.connectedCallback()
      this.__controllers__?.forEach((c) => c?.hostConnected?.())
    }

    disconnectedCallback (): void {
      super.disconnectedCallback()
      this.__controllers__?.forEach((c) => c?.hostDisconnected?.())
    }

    attributeChangedCallback (attr: string, oldValue: any, newValue: any) {
      super.attributeChangedCallback(attr, oldValue, newValue)
      this.__controllers__?.forEach((c) => c?.hostUpdated?.())
    }

    // https://www.fast.design/docs/fast-element/defining-elements#the-element-lifecycle
    // Based on checking source, this doesnt exist yet.
    // adoptedCallback (): void {
    //   super.adoptedCallback()
    //   this.__controllers__?.forEach((c) => c?.hostUpdated?.())
    // }
  }

  return ReactiveClass;
}
