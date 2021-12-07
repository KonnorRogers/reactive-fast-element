import { ReactiveFASTElement } from "./reactive-fast-element"
import { DOM } from "@microsoft/fast-element"

export class FASTReactiveControllerHostClass {
  controllers: Set<ReactiveFASTElement>

  constructor () {
    this.controllers = new Set<ReactiveFASTElement>()
  }

  addController (element: ReactiveFASTElement): void {
    this.controllers.add(element)
    if (element.__controllers == null) element.__controllers = new Set<ReactiveFASTElement>()

    element.__controllers
    element.__controllers.add(element)
  }

  removeController (element: ReactiveFASTElement): void {
    this.controllers.delete(element)
    if (element.__controllers != null) element.__controllers.delete(element)
  }

  requestUpdate (): void {
    DOM.queueUpdate(() => {})
  }

  async updateComplete (): Promise<boolean> {
    await DOM.nextUpdate()
    return true
  }
}

export const FASTReactiveControllerHost = new FASTReactiveControllerHostClass()
