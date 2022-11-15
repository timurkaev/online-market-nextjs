export interface ResponseUserInterface {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface LoginState {
  user: ResponseUserInterface;
  isLoading: boolean;
  error: string | undefined;
}

export interface LoginBody {
  username: string;
  password: string;
}
