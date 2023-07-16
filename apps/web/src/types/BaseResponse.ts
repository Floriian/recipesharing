export interface BaseEntity {
  _id: string;
}
export interface BaseResponse<T> {
  success: boolean;
  data: BaseEntity & T;
}
