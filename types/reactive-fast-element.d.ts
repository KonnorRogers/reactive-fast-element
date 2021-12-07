import { FASTElement } from "@microsoft/fast-element";
declare const ReactiveFASTElement_base: (new (...args: any[]) => import("./types").ReactiveElementInterface) & (new () => HTMLElement & FASTElement) & {
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