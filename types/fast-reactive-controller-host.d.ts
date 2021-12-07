import { ReactiveFASTElement } from "./reactive-fast-element";
export declare class FASTReactiveControllerHostClass {
    controllers: Set<ReactiveFASTElement>;
    constructor();
    addController(element: ReactiveFASTElement): void;
    removeController(element: ReactiveFASTElement): void;
    requestUpdate(): void;
    updateComplete(): Promise<boolean>;
}
export declare const FASTReactiveControllerHost: FASTReactiveControllerHostClass;
//# sourceMappingURL=fast-reactive-controller-host.d.ts.map