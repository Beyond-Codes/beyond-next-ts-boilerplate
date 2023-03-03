import { Axios } from 'axios';
import API from '@/common/configs/api.config';
import { ApiHelperClass } from '@/types/helper.types';

class ApiHelper implements ApiHelperClass {
  public readonly API: Axios;

  public readonly defaultError: string;

  constructor() {
    this.API = API;
    this.defaultError = '😕 Oops, something went wrong.';
  }

  errorHandler(error: any): string {
    return (
      error?.response?.data?.message ||
      error?.response?.data?.text ||
      this.defaultError
    );
  }

  public async getCountries() {
    try {
      const { data } = await this.API.get('/countries').catch((error) => {
        throw new Error(this.errorHandler(error));
      });

      return {
        data,
        error: null,
      };
    } catch (error: any) {
      return {
        data: null,
        error: error?.message || this.defaultError,
      };
    }
  }
}

const apiHelper = new ApiHelper();

export default apiHelper;
