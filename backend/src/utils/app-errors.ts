export class AppError extends Error {
  private readonly _statusCode: number;
  private readonly _logging: boolean;
  private readonly _context: { [key: string]: any };

  constructor(params?: {
    message?: string;
    statusCode?: number;
    logging?: boolean;
    context?: { [key: string]: any };
  }) {
    const { message, statusCode, logging, context } = params || {};

    super(message || "Something went wrong");
    this._statusCode = statusCode || 500;
    this._logging = logging || false;
    this._context = context || {};

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, AppError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return this._statusCode;
  }

  get logging() {
    return this._logging;
  }
}
