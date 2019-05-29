import { ILogger } from '@chaika/application';
export declare class ConsoleLogger implements ILogger {
    debug(message?: any, ...args: any[]): void;
    info(message?: any, ...args: any[]): void;
    warn(message?: any, ...args: any[]): void;
    error(message?: any, ...args: any[]): void;
    fatal(message?: any, ...args: any[]): void;
}
