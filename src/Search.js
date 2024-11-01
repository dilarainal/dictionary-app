import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search-bar">
      <form>
        <input
          type="search"
          placeholder="Search new term.."
          className="Search"
        />

        <input type="submit" value="Search" className="Search" />
      </form>
    </div>
  );
}
