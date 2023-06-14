function RES_WRAPPER<T>(
  data: T,
  msg: string,
  code: number,
): Common.CommonRes<T> {
  return {
    data,
    msg,
    code,
  };
}

export function SUCCESS_RES<T>(data: T, msg = 'success') {
  return RES_WRAPPER(data, msg, 200);
}

export function ERROR_RES(msg: string, code = 400, data?: any) {
  return RES_WRAPPER(data, msg, code);
}
