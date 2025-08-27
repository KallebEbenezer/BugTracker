type OriginError = 'service' | 'repository' | 'controller';

export class CustomError extends Error{
  public statusCode?: number;
  public errMessage?: string | null;
  public origin?: 'repository' | 'service' | 'controller';

  constructor(err_data: {
    statusCode: number;
    errMessage?: string | null; 
    message: string;
    origin: OriginError;
  }) {
    super(err_data.message);
    this.statusCode = err_data.statusCode;
    this.errMessage = err_data.errMessage;
    this.origin = err_data.origin;

    Object.setPrototypeOf(this, CustomError.prototype);
  } 
}