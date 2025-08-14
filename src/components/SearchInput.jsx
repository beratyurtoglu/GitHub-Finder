import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ setUserData }) => {
  const [username, setUsername] = useState("");

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="w-full shadow-lg bg-white rounded-2xl flex">
      <input
        type="text"
        placeholder="GitHub Username ..."
        className="placeholder:italic p-5 rounded-l-2xl outline-none border-none w-full"
        onChange={handleChangeInput}
      />

      <button
        onClick={getUserData}
        className="p-5 rounded-r-2xl border-l bg-green-400 text-white cursor-pointer"
      >
        <FaSearch className="m-1" />
      </button>
    </div>
  );
};

export default SearchInput;
