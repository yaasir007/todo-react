import React from 'react'
import { DoItem } from "./DoItem";

export const Todos = (props) => {
  return (
    <div className="container m-8">
      <h3 className="mb-5 text-xl">ToDo List App</h3>
      <div className="cards flex justify-start gap-8 flex-wrap">
        {props.todos.map((todo) => {
          return <DoItem todo={todo} key={todo.number} onDelete={props.onDelete} />;
        })}
      </div>
    </div>
  );
}
