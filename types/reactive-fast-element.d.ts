import { FASTElement } from "@microsoft/fast-element";
declare const ReactiveFASTElement_base: {
    new (..._args: any[]): {
        __controllers__?: Set<import("./types").ReactiveController> | undefined;
        addController(element: import("./types").ReactiveController): void;
        removeController(element: import("./types").ReactiveController): void;
        requestUpdate(): void;
        updateComplete(): Promise<boolean>;
        connectedCallback(): void;
        disconnectedCallback(): void;
        attributeChangedCallback(attr: string, oldValue: any, newValue: any): void;
        readonly $fastController: import("@microsoft/fast-element").Controller;
        $emit(type: string, detail?: any, options?: Omit<CustomEventInit<any>, "detail"> | undefined): boolean | void;
    };
} & (new () => HTMLElement & FASTElement) & {
    from<TBase extends {
        new (): HTMLElement;
        prototype: HTMLElement;
    }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
    define<TType extends Function>(type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
};
export declare class ReactiveFASTElement extends ReactiveFASTElement_base {
}
export {};
//# sourceMappingURL=reactive-fast-element.d.ts.map