interface IErrorFormat {
    domain: string;
    reason: string;
    message: string;
}

interface IError {
    code: number;
    message: string;
    errors: IErrorFormat[];
}

export { IError };
