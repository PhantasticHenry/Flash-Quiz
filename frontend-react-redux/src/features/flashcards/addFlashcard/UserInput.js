import React from "react";

function UserInput({ setInput, htmlFor, name, placeholder, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      type="text"
      name={name}
      onChange={(e) => setInput(e.target.value)}
    >
      <textarea placeholder={placeholder} />
    </label>
  );
}

export default UserInput;
