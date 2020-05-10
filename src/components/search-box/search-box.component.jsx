import React from "react";
import "./search-box.styles.css";

// functional component just returns some HTML
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
    className = 'search'
    type="search"
    placeholder= {placeholder}
    onChange= {handleChange}
  />
)