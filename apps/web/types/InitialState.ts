export interface InitialState<T> {
  isLoading: boolean;
  data: T;
  error?: any;
}
