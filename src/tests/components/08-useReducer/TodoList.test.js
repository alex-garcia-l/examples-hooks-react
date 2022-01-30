import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Prueba para el componente TodoList', () => {

  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList 
      todos={ demoTodos }
      handleToggle={ handleToggle }
      handleDelete={ handleDelete }
    />
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(`debe mostrar ${ demoTodos.length } <TodoListItem />` , () => {
    const index = 0;

    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('todo')).toEqual(demoTodos[index]);
    expect(wrapper.find('TodoListItem').at(0).prop('index')).toBe(index);
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  });
  
});
