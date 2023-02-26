import { Axios } from 'axios';

export type HelperError = string | null;

export interface HelperSelectOption {
  name: string;
  value: string;
}

export interface ApiHelperClass {
  readonly API: Axios;
  getCountries(): Promise<{
    data: HelperSelectOption[] | null;
    error: HelperError;
  }>;
}
