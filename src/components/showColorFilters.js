import React from "react";

function ShowColorFilters(props) {
  function filterSelected(e) {
    props.filterColor(e.target.value);
  }
  return (
    <div>
      <label className="font-weight-bolder mr-2">Color: </label>
      <select
        onChange={filterSelected}
        className="custom-select custom-select-sm w-50"
      >
        <option>All</option>
        <option>blue</option>
        <option>red</option>
        <option>grey</option>
        <option>white</option>
        <option>black</option>
        <option>brown</option>
        <option>orange</option>
      </select>
    </div>
  );
}

export default ShowColorFilters;
