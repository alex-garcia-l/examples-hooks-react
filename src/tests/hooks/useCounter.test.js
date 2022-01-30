import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from "../../hooks/useCounter";

describe('Prueba para el hook useCounter', () => {

  test('debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('debe de tener el counter en 100', () => {

    const initValue = 100;
    const { result } = renderHook(() => useCounter(initValue));

    expect(result.current.counter).toBe(initValue);
  });

  test('debe incremntar el counter en 1', () => {

    const initValue = 100;
    const { result } = renderHook(() => useCounter(initValue));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(initValue + 1);
  });

  test('debe decrementar el counter en 1', () => {

    const initValue = 100;
    const { result } = renderHook(() => useCounter(initValue));
    const { decrement } = result.current;

    act(() => {
      decrement(2);
    });

    expect(result.current.counter).toBe(initValue - 2);
  });

  test('debe recetear el counter en 100', () => {

    const initValue = 100;
    const { result } = renderHook(() => useCounter(initValue));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset()
    });

    expect(result.current.counter).toBe(initValue);
  });
});
