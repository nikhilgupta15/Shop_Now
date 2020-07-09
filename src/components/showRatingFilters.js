import React from "react";

function ShowRatingFilters(props) {
  function filterSelected(e) {
    props.filterRating(e.target.value);
  }
  return (
    <div>
      <label className="font-weight-bolder mr-2">Rating: </label>
      <select
        onChange={filterSelected}
        className="custom-select custom-select-sm w-50"
      >
        <option>All</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
}

export default ShowRatingFilters;
