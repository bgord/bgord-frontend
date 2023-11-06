export type ServerErrorConfigType = {
    message: string;
};
export declare class ServerError {
    message: ServerErrorConfigType["message"];
    _known: boolean;
    constructor(config: ServerErrorConfigType);
    static isServerError(value: unknown): value is ServerError;
    static extract(response: Response): Promise<Response>;
    static handle(payload: unknown): Promise<Response>;
}
