import { AxiosResponse } from "axios";
import { axiosInstance } from "../shared/axios";

const baseUrl = "/user/";

class UserService {
  async login(body: any) {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        baseUrl + "login",
        body
      );
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async register(body: any) {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        baseUrl + "signup",
        body
      );
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async getUserInfo(id: string) {
    try {
      const res: AxiosResponse = await axiosInstance.get(baseUrl + id);
      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export const userService = new UserService();
