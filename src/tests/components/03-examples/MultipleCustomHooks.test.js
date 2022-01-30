import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Prueba para el componente <MultipleCustomHooks />', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {}
    });
  })

  test('debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar información', () => {

    const data = {
      author: 'Developer',
      quote: 'A quote'
    };

    useFetch.mockReturnValue({
      data: [data],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('h2.mb-5').text().trim()).toBe(data.quote);
    expect(wrapper.find('footer').text().trim()).toBe(data.author);
  });
});
