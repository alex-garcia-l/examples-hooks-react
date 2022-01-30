import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Prueba para el hook useFetch', () => {

  test('debe devolver datos iniciales', () => {

    const { result } = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('debe devolver primer resultado', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
    
    await waitForNextUpdate();
    
    const { data, loading, error } = result.current;
    
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('debe devolver error en la respuesta', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    
    await waitForNextUpdate();
    
    const { data, loading, error } = result.current;
    
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).not.toBe(null);
  });

});
