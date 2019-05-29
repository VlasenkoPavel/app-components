import { ILogger } from '@chaika/application';

export class ConsoleLogger implements ILogger {

    public debug(message?: any, ...args: any[]): void {
        console.log(message, ...args);
    }

    public info(message?: any, ...args: any[]): void {
        console.log(message, ...args);
    }

    public warn(message?: any, ...args: any[]): void {
        console.log(message, ...args);
    }

    public error(message?: any, ...args: any[]): void {
        console.log(message, ...args);
    }

    public fatal(message?: any, ...args: any[]): void {
        console.log(message, ...args);
    }

}
