import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import { Button } from "../../components/Button/Button";

interface INavList {
  name: string;
  path: string;
}

const navList: INavList[] = [
  { name: "Products", path: "/products" },
  { name: "Users", path: "/users" },
  { name: "Posts", path: "/posts" },
  { name: "Todos", path: "/todos" },
];

export const Header: React.FC<HeaderProps> = ({ className, ...props }): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.navbar}>
        <ul className={styles.navlist}>
          {navList.map((obj) => (
            <li className={styles.navitem} key={obj.path}>
              {obj.name}
            </li>
          ))}
        </ul>
        <Link href={"/login"}>
          <a>
            <Button size="small">Log in</Button>
          </a>
        </Link>
      </div>
    </header>
  );
};
