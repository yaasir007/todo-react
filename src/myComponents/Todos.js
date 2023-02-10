import React from 'react'
import { DoItem } from "./DoItem";

export const Todos = (props) => {
  return (
    <div className="container mt-8 mb-8 p-5">
      <h3>ToDo List App</h3>
      {/* {props.Todos} */}
      <DoItem todo={props.todos[0]} />
    </div>
  );
}
