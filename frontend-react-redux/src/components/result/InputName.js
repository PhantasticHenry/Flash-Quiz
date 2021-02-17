import React from "react";

function InputName({ clicked, setName, name, textInput, handleClick }) {
  return (
    <div className={clicked ? "hide" : "name"}>
      <label>Please enter name: </label>
      <span>&nbsp;&nbsp;</span>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter name here"
        ref={textInput}
      />
      {name !== "" && (
        <button onClick={handleClick} type="submit">
          Enter
        </button>
      )}
    </div>
  );
}

export default InputName;
