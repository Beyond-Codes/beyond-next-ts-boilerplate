import { IHelperError } from '@/types/helper.types';

class HelperError extends Error implements IHelperError {
  readonly name: string;

  readonly message: string;

  readonly code?: string | number | undefined;

  constructor({ message, code }: { message: string; code?: string | number }) {
    super(message);
    this.name = 'HelperError';
    this.message = message;
    this.code = code || undefined;
  }
}

export default HelperError;
