import { mount } from 'enzyme';

import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueba para el componente <HomeScreen />', () => {

  const user = {

  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  

});
