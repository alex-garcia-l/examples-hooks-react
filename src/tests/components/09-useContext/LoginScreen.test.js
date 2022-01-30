import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueba para el componente <LoginScreen />', () => {

  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe ejecutarse setUser con los argumentos esperados', () => {
    wrapper.find('button').simulate('click', { preventDefault() { } });

    expect(setUser).toHaveBeenCalledWith({
      id: 1234,
      name: 'Name',
      user: '@username'
    });
  });

});
