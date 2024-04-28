export interface IState {
  auth: {
    authInfo: {
      accessToken: string;
      userId: string;
    };
    userInfo: IUserInfo;
  };
}

export interface IUserInfo {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  address: string;
  password: string;
}
