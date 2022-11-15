import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";

const Home: NextPage = () => {
  return <div>Hello world</div>;
};

export default withLayout(Home);
