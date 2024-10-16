import { endPoint } from "@/services/endPoint";
import http from "@/services/http";
import { BaseReponse, LoginReponse, LoginRequest } from "@/interface";

const loginApi = async (
  data: LoginRequest
): Promise<BaseReponse<LoginReponse>> => {
  return await http.post(endPoint.auth.signIn, data);
};

export { loginApi };
