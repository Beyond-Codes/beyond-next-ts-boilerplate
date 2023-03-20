import { Axios } from 'axios';

export type HelperError = string | null;

export interface IHelperError {
  name: string;
  message: string;
  code?: string | number;
}

export interface HelperSelectOption {
  name: string;
  value: string;
}

export interface ApiHelperClass {
  readonly API: Axios;
  readonly defaultError: string;

  errorHandler(error: any): { message: string; code?: string | number };
  getCountries(): Promise<{
    data: HelperSelectOption[] | null;
    error: HelperError;
  }>;
}
