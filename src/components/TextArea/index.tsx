import React from "react";
import "./TextArea.scss";
import classNames from "classnames";

type TextAreaProps = {
  placeholder?: string;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  id: string;
  name: string;
  noresize?: boolean;
  rows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  noresize,
  id,
  error,
  errorMessage,
  onBlur,
  onChange,
  value,
  name,
  rows,
}) => {
  return (
    <div className="textarea">
      <div className="textarea-field">
        <textarea
          id={id}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames({ noresize })}
          rows={rows}
        ></textarea>
      </div>
      <span className="errorMessage">{error && errorMessage}</span>
    </div>
  );
};

TextArea.defaultProps = {
  rows: 2,
};

export default TextArea;
