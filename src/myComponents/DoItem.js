import React from 'react'
import cardImage  from "../assets/card.jpg"

export const DoItem = ({ todo }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={cardImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{todo.title}</h2>
        <p>{todo.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
};
