import type { ReactiveControllerHost, ReactiveController } from '../../src';
export declare class ClockController implements ReactiveController {
    host: ReactiveControllerHost;
    value: Date;
    timeout: number;
    private _timerID?;
    constructor(host: ReactiveControllerHost, timeout?: number);
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=clock-controller.d.ts.map