import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__faceIn">
      <img src={url} alt={title} />
      <p>{title.length < 10 ? `${title}` : `${title.substring(0, 25)}...`}</p>
    </div>
  );
};
