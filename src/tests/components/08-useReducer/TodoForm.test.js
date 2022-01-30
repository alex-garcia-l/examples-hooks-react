import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { TodoForm } from '../../../components/08-useReducer/TodoForm';

describe('Pruebas para el componente <TodoApp />', () => {

  const handleAdd = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TodoForm
        handleAdd={handleAdd}
      />
    );
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('NO debe de llamarse la función handleAdd', () => {

    const formSubmit = wrapper.find('form').prop('onSubmit');

    act(() => {
      formSubmit({ preventDefault() { } });
    })

    expect(handleAdd).toHaveBeenCalledTimes(0);

  });

  test('debe de llamarse la función handleAdd', () => {

    const value = 'Aprender react';
    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value: value
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');    
    
    act(() => {
      formSubmit({ preventDefault() { } });
    });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      desciption: value,
      done: false
    });

    // expect(wrapper.find('input').prop('value')).toBe(''); // TODO: terminar de hacer
  });

});
