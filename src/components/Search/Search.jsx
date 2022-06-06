import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./Search.css";

const Search = () => {
  return (
    <div className="Search">
      <img src="" alt="" />
      <div className="SearchInput">
        <input type="text" placeholder="#キーワード検索" />
        <div className="SearchIcon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
