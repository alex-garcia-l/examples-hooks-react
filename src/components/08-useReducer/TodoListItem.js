import React from 'react';
import PropTypes from 'prop-types';
import { Trash2, Check, X } from 'react-feather';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <tr className={`${todo.done ? 'text-dark bg-light text-decoration-line-through fst-italic' : ''}`}>
      <th>{index + 1}</th>
      <th>{todo.desciption}</th>
      <th>
        <button
          className={`btn ${!todo.done ? 'btn-success' : 'btn-warning'} btn-sm me-2`}
          onClick={() => handleToggle(todo.id)}
        >
          {!todo.done ? <Check size={16} /> : <X size={16} />}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(todo)}
        >
          <Trash2 size={16} />
        </button>
      </th>
    </tr>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
