import React from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input: React.FC<InputProps> = ({
  className,
  type = "text",
  ...props
}): JSX.Element => {
  return <input className={cn(styles.input, className, {})} type={type} {...props} />;
};
