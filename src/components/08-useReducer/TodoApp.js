import React, { useEffect, useReducer } from 'react';
import Swal from 'sweetalert2';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { useReducerTodo } from './useReducerTodo';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-outline-danger ms-4'
  },
  buttonsStyling: false
});

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

export const TodoApp = () => {

  const [todos, dispatchTodos] = useReducer(useReducerTodo, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodo) => {
    dispatchTodos({
      type: 'add',
      payload: newTodo
    });
    
    Toast.fire({
      icon: 'success',
      title: 'Successfully added'
    });
  }

  const handleToggle = (id) => {
    dispatchTodos({
      type: 'toggle-done',
      payload: id
    });
  }

  const handleDelete = (todo) => {
    swalWithBootstrapButtons.fire({
      title: `Are you sure to remove <span class="fw-bolder">${todo.desciption}</span>?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatchTodos({
          type: 'delete',
          payload: todo.id
        });
      }
    });
  }

  return (
    <div className="">
      <div className="row">
        <h1>Todo App</h1>
        <hr />
      </div>
      <div className="row">
        <div className='col-12 col-md-5 col-lg-4'>
          <TodoForm handleAdd={handleAdd} />
        </div>
        <div className='col-12 col-md-7 col-lg-8 mt-4 mt-md-0'>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
