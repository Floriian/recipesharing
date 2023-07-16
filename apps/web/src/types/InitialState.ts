export interface InitialState<T> {
  isLoading: boolean;
  data: Array<T>;
  error?: any;
}
