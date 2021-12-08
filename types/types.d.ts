export declare type Constructor<T = {}> = new (...args: any[]) => T;
export interface ReactiveController {
    host: ReactiveControllerHost;
    hostConnected?(): void;
    hostDisconnected?(): void;
    hostUpdate?(): void;
    hostUpdated?(): void;
}
export interface ReactiveControllerHost {
    addController(controller: ReactiveController): void;
    removeController(controller: ReactiveController): void;
    requestUpdate(): void;
    readonly updateComplete: Promise<boolean>;
}
//# sourceMappingURL=types.d.ts.map