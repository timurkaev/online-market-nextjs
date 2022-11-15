import axios, { Axios } from "axios";
import { LoginBody, ResponseUserInterface } from "../../interfaces/login-interface";

// export const loginUser = async ({
//   username,
//   password,
// }: LoginBody): Promise<ResponseUserInterface> => {
//   const response = await axios.post<ResponseUserInterface>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/auth/login",
//     {
//       username,
//       password,
//     },
//   );
//   return response.data;
// };

export class LoginApi {
  static async loginUser(username: string, password: string): Promise<ResponseUserInterface> {
    const response = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + "/auth/login", {
      username,
      password,
    });
    return response.data;
  }
}
