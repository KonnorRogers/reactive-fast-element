import { ReactiveFASTElement } from "./reactive-fast-element"
import { DOM } from "@microsoft/fast-element"

export class FASTReactiveControllerHostClass {
  controllers: Set<ReactiveFASTElement>

  constructor () {
    this.controllers = new Set<ReactiveFASTElement>()
  }

  addController (controller: ReactiveFASTElement): void {
    this.controllers.add(controller)
  }

  removeController (controller: ReactiveFASTElement): void {
    this.controllers.delete(controller)
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
