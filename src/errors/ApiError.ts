import { Domain, ErrorType } from "./enums";
import { IError } from "./interfaces";

export class ApiError extends Error {
    private apiVersion = "1.0";
    private code: number;
    private reason: string;
    private error: IError;

    constructor(code: number, message: string, reason: string) {
        super(message);
        this.name = ErrorType.ApiError;
        this.code = code;
        this.reason = reason;

        const errors = [
            {
                domain: Domain.Default,
                reason,
                message,
            },
        ];

        this.error = {
            code,
            message,
            errors,
        };
    }

    public getCode(): number {
        return this.code;
    }
}
