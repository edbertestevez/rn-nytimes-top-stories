import Axios, {AxiosResponse} from 'axios';
import {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useSelector} from 'react-redux';
import {RequestMethods} from '../constants/common';
import {ERROR_NO_NETWORK_CONNECTION} from '../constants/errors';
import {RootState} from '../store';
import {isPlatformAndroid} from '../utils/common';

interface IRequest {
  data: any | null;
  error: boolean;
}

const useHttpRequest = (url: string, method: string, body?: object) => {
  const isConnected = useSelector(
    (state: RootState) => state.network.isConnected,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState<IRequest>({
    data: null,
    error: false,
  });

  useEffect(() => {
    if (isConnected) {
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
    } else {
      if (isPlatformAndroid()) {
        ToastAndroid.showWithGravityAndOffset(
          ERROR_NO_NETWORK_CONNECTION,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          50,
        );
      }
    }
  }, [url, method, body, isConnected]);

  return {request, isLoading};
};

export default useHttpRequest;
