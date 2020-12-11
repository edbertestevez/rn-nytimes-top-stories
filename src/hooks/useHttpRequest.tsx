import Axios, {AxiosResponse} from 'axios';
import {useState, useEffect} from 'react';
import {RequestMethods} from '../constants/common';

interface IRequest {
  loading: boolean;
  data: any | null;
  error: boolean;
}

const useHttpRequest = (url: string, method: string, body?: object) => {
  const [request, setRequest] = useState<IRequest>({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    let apiRequest = null;

    setRequest({
      loading: true,
      data: null,
      error: false,
    });

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
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url, method, body]);

  return request;
};

export default useHttpRequest;
