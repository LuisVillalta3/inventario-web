import React from "react";
import "./LinkButton.scss";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
