"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import Loader from "./Loader";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard key={post._id} post={post} handleClick={handleTagClick} />
      ))}
    </div>
  );
};

function Feed() {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  const filterPrompts = searchtext => {
    const regex = new RegExp(searchtext, "i"); 
    return allPosts.filter(
      item =>
        regex.test(item.creator.name) ||
        regex.test(item.tag) ||
        regex.test(item.bookName) ||
        regex.test(item.authour) ||
        regex.test(item.post)
    );
  };

  const handleSearchChange = e => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = tagName => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const handleForm = e => {
    e.preventDefault();
  };

  return (
    <section className="feed ">
      <form className="relative w-full flex-center" onSubmit={handleForm}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
          placeholder="Search for title or authour name"
        />
      </form>

      {/* all posts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <>
          <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
        </>
      )}
    </section>
  );
}

export default Feed;
