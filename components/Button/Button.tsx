import React from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  size = "medium",
  ...props
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
