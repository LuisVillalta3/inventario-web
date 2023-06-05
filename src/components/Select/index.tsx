import React, { HTMLInputTypeAttribute } from "react";
import "./TextInput.scss";
import classNames from "classnames";

export type ValueSchema = {
  value: string;
  label: string;
};

type SelectProps = {
  blank?: string;
  type?: HTMLInputTypeAttribute;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  id: string;
  name: string;
  label?: string;
  options: ValueSchema[];
};

const Select: React.FC<SelectProps> = ({
  blank,
  type,
  id,
  error,
  errorMessage,
  onBlur,
  onChange,
  value,
  label,
  name,
  options,
}) => {
  return (
    <div className="text-input">
      <div className="text-input-field">
        {label && <label htmlFor={id}>{label}</label>}
        <select name={name} id={id}>
          {blank && <option value="">{blank}</option>}
          {options.map((option) => (
            <option selected={option.value === value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <span className="errorMessage">{error && errorMessage}</span>
    </div>
  );
};

export default Select;
