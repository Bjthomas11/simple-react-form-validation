import React from "react";

const Input = ({ id, label, type, inputName, inputRef, className }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={inputName}
        ref={inputRef}
        className={className}
        id={id}
      />
    </>
  );
};

export default Input;
