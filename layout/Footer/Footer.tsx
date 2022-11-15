import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

export const Footer: React.FC<FooterProps> = ({ className, ...props }): JSX.Element => {
  return (
    <footer className={styles.footer} {...props}>
      <span>Все права защищены брад</span>
    </footer>
  );
};
