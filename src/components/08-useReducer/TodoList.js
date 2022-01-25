import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <>
      <h3>Todo List ({todos.length} totals)</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todos
              .sort(function (a, b) { return a.done - b.done })
              .map((todo, index) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  handleToggle={handleToggle}
                  handleDelete={handleDelete}
                />
              ))
          }
        </tbody>
      </table>
    </>
  );
};
