export interface InitialState<T> {
  isLoading: boolean;
  data: Array<T> | T;
  error?: any;
}
