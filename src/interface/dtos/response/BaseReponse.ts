export interface BaseReponse<T> {
  message: string;
  data: T;
  onSuccess: boolean;
}
