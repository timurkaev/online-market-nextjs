import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import { LoginForm } from "../components/LoginForm/LoginForm";

const Login: NextPage = (): JSX.Element => {
  return <LoginForm />;
};

export default withLayout(Login);
