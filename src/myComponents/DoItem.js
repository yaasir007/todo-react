import React from 'react'
import cardImage  from "../assets/card.jpg"

export const DoItem = ({ todo, onDelete }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={cardImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2
          className="card-title">
          {todo.title}
        </h2>
        <p>{todo.description}</p>
        <div className="card-actions justify-end">
          {/* The function onDelete will be called only when clicked, not when the page will rendered  */}
          <button
            className="btn btn-warning"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
