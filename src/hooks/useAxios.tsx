import { useEffect, useState } from "react";
import { api } from "../services/api";
interface IAxios {
  payload?: Object;
  method: string;
  url: string;
}
function useAxios({ method, payload, url }: IAxios) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = api.request({
          data: payload,
          method: method,
          url: url,
        });
        response
          .then((res) => {
            if (res.data) {
              setData(res.data);
            }
          })
          .catch((err) => {
            console.log(err);
            setError(err.status);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [method,payload,url]);
  return { data, error };
}

export default useAxios;
