import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <form
      onSubmit={handleSearch}
      className='max-w-xl w-full py-1 flex items-center bg-white border border-gray-500/20 rounded'
    >
      <img
        src={assets.search_icon}
        alt='search icon'
        className='w-10 md:w-auto px-3'
      />
      <input
        type='text'
        placeholder='Search for courses'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className='w-full h-full outline-none text-gray-500/80'
      />
      <button
        type='submit'
        className='bg-blue-600 rounded text-white px-7 md:px-10 py-2 md:py-3 mx-1 cursor-pointer'
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
