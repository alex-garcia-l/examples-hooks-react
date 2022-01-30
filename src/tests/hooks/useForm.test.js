import { act, renderHook } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe('Prueba para el hook useForm', () => {

  const initialForm = {
    name: 'Name',
    email: 'mail@mail.com'
  }

  const target = {
    name: 'name',
    value: 'Name2'
  }

  test('debe devolver un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [valuesForm, handleChange, reset] = result.current;

    expect(valuesForm).toEqual(initialForm);
    expect(typeof handleChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe cambiar el valor del formulario (campo name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    let [valuesForm, handleChange] = result.current;

    expect(valuesForm).toEqual(initialForm);

    act(() => {
      handleChange({ target });
    });

    [valuesForm] = result.current;

    expect(valuesForm).toEqual({ ...initialForm, name: target.value });
  });

  test('debe restablecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm(initialForm));
    let [valuesForm, handleChange, reset] = result.current;

    expect(valuesForm).toEqual(initialForm);

    act(() => {
      handleChange({ target });
      reset();
    });

    [valuesForm] = result.current;

    expect(valuesForm).toEqual(initialForm);
  });
});
