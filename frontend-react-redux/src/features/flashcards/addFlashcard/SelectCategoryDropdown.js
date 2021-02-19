import React from "react";

function SelectCategoryDropdown({ categoryProp, setCategory }) {
  return (
    <label htmlFor="category select" type="select">
      Select a category:
      <select
        defaultValue={categoryProp}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value={categoryProp} disabled>
          Category
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
