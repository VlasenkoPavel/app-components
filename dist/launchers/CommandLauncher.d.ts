import { Launcher } from "@chaika/application";
interface Command {
    execute(): Promise<void>;
}
export declare class CommandLauncher extends Launcher {
    private commands;
    constructor(commands: Command[]);
    start(): void;
}
export {};
