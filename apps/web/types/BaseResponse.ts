import { type AxiosResponse } from "axios";
export interface BaseResponse<T> {
  success: boolean;
  data: T;
}
