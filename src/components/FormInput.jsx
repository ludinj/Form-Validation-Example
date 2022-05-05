import React from "react";
import { useState } from "react";
import "./form.scss";
const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focused={focus.toString()}
      ></input>
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default FormInput;
