import React from "react";
import "./AuthInput.style.css";
const AuthInput = ({
  width,
  type,
  placeholder,
  handleSetValue,
  isValue,
  readOnly,
  // inputEl,
  id,
  ...rest
}) => {
  // console.log(id);
  return (
    <label className="auth_input_label" style={{ width: width }}>
      <input
        id={id}
        className="auth_input"
        value={isValue.isValue}
        onChange={handleSetValue}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly && "readOnly"}
        // ref={inputEl}
      />
    </label>
  );
};

export default AuthInput;
