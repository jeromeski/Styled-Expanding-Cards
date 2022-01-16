import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url) {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (url) {
      try {
        (async () => {
          const { data } = await axios.get(url);
          setState(data);
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [url]);

  return state;
}

export default useAxios;
