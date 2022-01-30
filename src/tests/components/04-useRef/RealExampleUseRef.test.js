import { shallow } from 'enzyme';
import { RealExampleUseRef } from '../../../components/04-useRef/RealExampleUseRef';

describe('Prueba para el componente <RealExampleUseRef />', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RealExampleUseRef />);
  })

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });

  test('debe ocultar el componente MultipleCustomHooks al precionar el botón Visualizar/Ocultar', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
});
