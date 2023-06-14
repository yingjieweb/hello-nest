declare namespace Common {
  interface CommonRes<T> {
    data: T;
    msg: string;
    code: number;
  }
}
