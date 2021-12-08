import { FASTElement } from "@microsoft/fast-element";
import { Constructor, ReactiveController } from "./types";
/**
 * https://lit.dev/docs/composition/mixins/
 * A mixin to make FASTElements use the ReactiveElement lifecycle.
 *
 * Hooks into fast element to provide a Reactive Lifecycle.
 */
export declare const FASTReactiveMixin: <T extends Constructor<FASTElement>>(superClass: T) => {
    new (..._args: any[]): {
        __controllers__?: Set<ReactiveController> | undefined;
        addController(element: ReactiveController): void;
        removeController(element: ReactiveController): void;
        requestUpdate(): void;
        updateComplete(): Promise<boolean>;
        connectedCallback(): void;
        disconnectedCallback(): void;
        attributeChangedCallback(attr: string, oldValue: any, newValue: any): void;
        readonly $fastController: import("@microsoft/fast-element").Controller;
        $emit(type: string, detail?: any, options?: Omit<CustomEventInit<any>, "detail"> | undefined): boolean | void;
    };
} & T;
//# sourceMappingURL=fast-reactive-mixin.d.ts.map