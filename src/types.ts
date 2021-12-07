import { FASTElement } from "@microsoft/fast-element"
import { FASTReactiveControllerHostClass } from "./fast-reactive-controller-host"

export interface ReactiveElementInterface extends FASTElement {
  host: FASTReactiveControllerHostClass
}

export interface ReactiveController {
  hostConnected?(): void
  hostDisconnected?(): void
  hostUpdate?(): void
  hostUpdated?(): void
}
