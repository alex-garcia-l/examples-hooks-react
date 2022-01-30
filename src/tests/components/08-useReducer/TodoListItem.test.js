import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas para el componente <TodoListItem />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 0;
  const todo = demoTodos[index];

  const wrapper = shallow(
    <TodoListItem
      todo={todo}
      index={index}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe llamar la función borrar', () => {
    wrapper.find('.btn-danger').first().simulate('click');
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(todo);
  });

  test('debe llamar la función handleToogle', () => {
    const buttonToogle = wrapper.find('.me-2').first();
    const children = !todo.id ? 'X' : 'Check';
    buttonToogle.simulate('click');

    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
    expect(wrapper.find(children).exists()).toBe(true);
  });

  test('debe mostrar el texto correctamente', () => {
    const tr = wrapper.find('tr');
    expect(tr.childAt(0).text().trim()).toBe(`${index + 1}`);
    expect(tr.childAt(1).text().trim()).toBe(todo.desciption);
  });

  test('debe de mostrar completado la lista', () => {
    
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
    
    expect(wrapper.find('tr').hasClass('text-dark')).toBe(true);
  });  

});
