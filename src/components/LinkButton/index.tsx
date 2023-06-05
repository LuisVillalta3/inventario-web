import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

type LinkButtonProps = {
  to: string;
  label: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ to, label }) => {
  return (
    <Link to={to} className="link-button">
      <button>{label}</button>
    </Link>
  );
};

export default LinkButton;
