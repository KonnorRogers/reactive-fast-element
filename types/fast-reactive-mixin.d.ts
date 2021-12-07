import { FASTElement } from "@microsoft/fast-element";
import { ReactiveElementInterface } from "./types";
declare type ReactiveConstructor<T = {}> = new (...args: any[]) => T;
/**
 * https://lit.dev/docs/composition/mixins/
 * A mixin to make FASTElements use the ReactiveElement lifecycle.
 *
 * Hooks into fast element to provide a Reactive Lifecycle.
 */
export declare const FASTReactiveMixin: <T extends ReactiveConstructor<FASTElement>>(superClass: T) => ReactiveConstructor<ReactiveElementInterface> & T;
export {};
//# sourceMappingURL=fast-reactive-mixin.d.ts.map