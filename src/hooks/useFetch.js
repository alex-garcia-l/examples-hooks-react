import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

  const isMounted = useRef(true);

  const initialState = {
    data: null,
    loading: true,
    error: null
  };

  const [state, setState] = useState(initialState);

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
          })
        }

      });
  }, [url]);


  return state;
};
