import React from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <div className="title-category">
        <h3 className="animate__animated animate__faceIn">{category}</h3>
      </div>

      {loading && (
        <p className="card animate__animated animate__flash">Loading</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
          //<li key={img.id}>{img.title}</li>
        ))}
      </div>
    </>
  );
};
