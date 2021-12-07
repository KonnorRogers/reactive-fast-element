import { FASTElement } from "@microsoft/fast-element"
import { ReactiveElementInterface, ReactiveController } from "./types"

type ReactiveConstructor<T = {}> = new (...args: any[]) => T;

/**
 * https://lit.dev/docs/composition/mixins/
 * A mixin to make FASTElements use the ReactiveElement lifecycle.
 *
 * Hooks into fast element to provide a Reactive Lifecycle.
 */
export const FASTReactiveMixin = <T extends ReactiveConstructor<FASTElement>>(superClass: T) => {
  class ReactiveClass extends superClass {
    __controllers?: Set<ReactiveController>

    constructor (..._args: any[]) {
      super()
      if (this.__controllers == null) this.__controllers = new Set()
      this.__controllers?.forEach((c) => c?.hostConnected?.())
    }

    connectedCallback (): void {
      super.connectedCallback()
      this.__controllers?.forEach((c) => c?.hostConnected?.())
    }

    disconnectedCallback (): void {
      super.disconnectedCallback()
      this.__controllers?.forEach((c) => c?.hostDisconnected?.())
    }

    // https://www.fast.design/docs/fast-element/defining-elements#the-element-lifecycle
    // Based on checking source, this doesnt exist yet.
    // adoptedCallback (): void {
    //   super.adoptedCallback()
    //   this.__controllers?.forEach((c) => c?.hostUpdated?.())
    // }
    attributeChangedCallback (attr: string, oldValue: any, newValue: any) {
      super.attributeChangedCallback(attr, oldValue, newValue)
      this.__controllers?.forEach((c) => c?.hostUpdated?.())
    }
  }

  return ReactiveClass
}
