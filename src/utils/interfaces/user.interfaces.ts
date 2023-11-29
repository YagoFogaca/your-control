export interface IUserLogin {
  email: string;
  password: string;
}

export interface IResUserLogin {
  user: {
    email: string;
    id: string;
    name: string;
  };
  jwt: string;
}
