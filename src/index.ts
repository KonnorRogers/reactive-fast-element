import { FASTElement } from "@microsoft/fast-element"

import { FASTReactiveMixin } from "./fast-reactive-mixin"

export type { ReactiveControllerHost, ReactiveController } from "./types"

export { FASTReactiveMixin }

/**
 * An easy to use FASTElement mixin that implements the Lit model for ReactiveControllers.
 *   @example
 *     import { ReactiveFASTElement } from "reactive-fast-element"
 *
 *     class MyCounter extends ReactiveFASTElement {}
 */
export class ReactiveFASTElement extends FASTReactiveMixin(FASTElement) {}

