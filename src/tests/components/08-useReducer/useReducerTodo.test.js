import { useReducerTodo } from "../../../components/08-useReducer/useReducerTodo";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Prueba para useReducerTodo', () => {

  test('debe devolver el state inicial', () => {

    const state = useReducerTodo(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('debe agregar un TODO', () => {

    const newTodo = {
      id: 3,
      description: 'Learn MongoDB',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    const state = useReducerTodo(demoTodos, action);
    expect(state.length).toBe(demoTodos.length + 1);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('debe eliminar un TODO', () => {

    const ID = 1;
    const action = {
      type: 'delete',
      payload: ID
    };

    const state = useReducerTodo(demoTodos, action);
    expect(state.length).toBe(demoTodos.length - 1);
    expect(state).toEqual(demoTodos.filter(todo => todo.id !== ID));
  });

  test('Debe hacer el TOOGLE del TODO', () => {
    const ID = 1;
    const action = {
      type: 'toggle-done',
      payload: ID
    };

    const state = useReducerTodo(demoTodos, action);

    const todoState = state.filter(todo => todo.id === ID)[0];
    const todoDemo = demoTodos.filter(todo => todo.id === ID)[0];
    expect(todoState.done).toBe(!todoDemo.done);

    const todosState = state.filter(todo => todo.id !== ID);
    const todosDemo = demoTodos.filter(todo => todo.id !== ID);
    expect(todosState).toEqual(todosDemo);
  });
});
