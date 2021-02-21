import React from "react";

function SelectCategoryDropdown({ categoryProp, setCategory }) {
  return (
    <label htmlFor="category select" type="select">
      <select defaultValue={0} onChange={(e) => setCategory(e.target.value)}>
        <option value={0} disabled>
          Please select category
        </option>
        <option value="Reactjs">ReactJS</option>
        <option value="Funny">Funny Random</option>
        <option value="Redux">Redux</option>
        <option value="Ruby">Ruby</option>
        <option value="Math">Math</option>
      </select>
    </label>
  );
}

export default SelectCategoryDropdown;
