import React from "react";

function ShowCategoryFilters(props) {
  function filterSelected(e) {
    props.filterCategory(e.target.value);
  }
  return (
    <div>
      <label className="font-weight-bolder mr-2">Category: </label>
      <select
        className="custom-select custom-select-sm w-50"
        onChange={filterSelected}
      >
        <option>All</option>
        <option>shirts</option>
        <option>jackets</option>
        <option>trousers</option>
        <option>coats</option>
        <option>jeans</option>
        <option>skirts</option>
      </select>
    </div>
  );
}

export default ShowCategoryFilters;
