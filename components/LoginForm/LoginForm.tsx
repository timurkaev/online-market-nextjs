import React from "react";
import styles from "./LoginForm.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUserAsync } from "../../redux/slices/login-slice";

export const LoginForm: React.FC = (): JSX.Element => {
  const [username, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const { user, error } = useAppSelector((state) => state.loginReducer);
  const dispatch = useAppDispatch();

  console.log(user);
  console.log(error);

  const loginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await dispatch(loginUserAsync({ username, password }));
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <form onSubmit={(e) => loginForm(e)} className={styles.form}>
      <h1 className={styles.formTitle}>Log in</h1>
      <Input
        value={username}
        onChange={nameHandler}
        className={styles.input}
        type="text"
        placeholder="Login"
      />
      <Input
        value={password}
        onChange={passwordHandler}
        className={styles.input}
        type="password"
        placeholder="password"
      />
      <div className={styles.authData}>
        username: <strong>kminchelle</strong> / password: <strong>0lelplR</strong>
      </div>
      <Button type="submit" size="medium">
        Log in
      </Button>
      <div>
        {user.token?.length !== 0 && (
          <div>
            {user.username} {user.gender}
          </div>
        )}
      </div>
    </form>
  );
};
