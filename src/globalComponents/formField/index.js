import React from "react";

const FormField = ({
  label,
  as = "input",
  options = [],
  prependIcon,
  ...rest
}) => {
  return (
    <div className="custom-form-field">
      <label>{label}</label>
      {as === "select" ? (
        <select {...rest}>
          {options.map((option) => (
            <option name={option.name} key={option.name}>
              {option.title}
            </option>
          ))}
        </select>
      ) : (
        <div className="position-relative">
          {prependIcon ? <img src={prependIcon} alt="" className="prepend-icon" /> : null}
          <input {...rest} />
        </div>
      )}
    </div>
  );
};

export default FormField;
