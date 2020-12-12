import Axios, {AxiosResponse} from 'axios';
import {useState, useEffect} from 'react';
import {RequestMethods} from '../constants/common';

interface IRequest {
  data: any | null;
  error: boolean;
}

const useHttpRequest = (url: string, method: string, body?: object) => {
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState<IRequest>({
    data: null,
    error: false,
  });

  useEffect(() => {
    let apiRequest = null;

    setIsLoading(true);

    switch (method) {
      case RequestMethods.POST: {
        apiRequest = Axios.post(url, body);
        break;
      }
      case RequestMethods.PATCH: {
        apiRequest = Axios.patch(url, body);
        break;
      }
      case RequestMethods.DELETE: {
        apiRequest = Axios.delete(url);
        break;
      }
      case RequestMethods.GET:
      default: {
        apiRequest = Axios.get(url);
        break;
      }
    }

    apiRequest
      ?.then((response: AxiosResponse<Response>) => {
        setRequest({
          data: response.data,
          error: false,
        });

        setIsLoading(false);
      })
      .catch(() => {
        setRequest({
          data: null,
          error: true,
        });

        setIsLoading(false);
      });
  }, [url, method, body]);

  return {request, isLoading};
};

export default useHttpRequest;
