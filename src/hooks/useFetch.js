import { useEffect, useRef, useState } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null
};

export const useFetch = (url = '') => {

  const [state, setState] = useState(initialState);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {

    setState(initialState);

    fetch(url)
      .then(resp => resp.json())
      .then(data => {

        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null
          });
        }

      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error: 'Error'
        });
      });
  }, [url]);

  return state;
};
