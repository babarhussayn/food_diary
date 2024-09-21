import React, { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoSearchOutline } from "react-icons/io5";
const Search: FC = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    navigate({
      pathname: "/product",
      search: `?search=${keyword}`,
    });
  };
  const handleAllCate=()=>{
    navigate('/')
  }

  return (
    <div className="search-main">
      <form onSubmit={submit} className="search-anim">
        <input
          className="search-main-input"
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="search-main-button">
        
        <IoSearchOutline size={41} color="black" />
        </button>
        <div className="search-all" >
        <button type="button" onClick={handleAllCate} className="search-all-buton">All Category</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
