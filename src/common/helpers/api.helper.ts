import { Axios } from 'axios';
import API from '@/common/configs/api.config';
import { ApiHelperClass } from '@/types/helper.types';

class ApiHelper implements ApiHelperClass {
  public readonly API: Axios;

  constructor() {
    this.API = API;
  }

  public async getCountries() {
    try {
      const { data } = await this.API.get('/countries');
      return {
        data,
        error: null,
      };
    } catch (error: any) {
      return {
        data: null,
        error: error?.message || '😕 Oops,Something went wrong.',
      };
    }
  }
}

const apiHelper = new ApiHelper();

export default apiHelper;
