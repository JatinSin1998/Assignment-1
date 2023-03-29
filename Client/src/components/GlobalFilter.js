import React, { useState } from "react";
// Global Filter 
function GlobalFilter({ filter, setFilter }) {
  const [inputData, SetIndputData] = useState("");

  return (
    <span className="d-flex">
      <input
        className="form-control me-2 w-auto mx-auto"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={inputData}
        onChange={(e) => SetIndputData(e.target.value)}
       
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={() => {
          setFilter(inputData);
          SetIndputData("")
          
        }}
      >
        Search
      </button>

      {/* Search: {" "}
          <input value = {filter || ""}
          onChange= {e => setFilter(e.target.value)}/> */}
    </span>
  );
}

export default GlobalFilter;
