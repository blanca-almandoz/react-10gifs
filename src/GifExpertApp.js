import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["friday"]);

  /* const handleCategories = () => {
    setCategories([...categories, "abrigos"]);
  }; */

  return (
    <div>
      <h1>10-GIFS</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((categories) => (
        //<li key={categories}>{categories}</li>
        <GifGrid key={categories} category={categories} />
      ))}
    </div>
  );
};

export default GifExpertApp;
