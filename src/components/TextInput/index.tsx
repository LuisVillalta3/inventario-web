import React, { HTMLInputTypeAttribute, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./TextInput.scss";
import classNames from "classnames";

type TextInputProps = {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  id: string;
  name: string;
};

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  type,
  id,
  error,
  errorMessage,
  onBlur,
  onChange,
  value,
  name,
}) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="text-input">
      <div className="text-input-field">
        <input
          type={inputType}
          placeholder={placeholder}
          className={classNames({
            password: type === "password",
          })}
          id={id}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
        {type === "password" &&
          (inputType === "password" ? (
            <VisibilityOffIcon
              className="eyeIcon"
              onClick={() => setInputType("text")}
            />
          ) : (
            <VisibilityIcon
              className="eyeIcon"
              onClick={() => setInputType("password")}
            />
          ))}
      </div>
      <span className="errorMessage">{error && errorMessage}</span>
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
