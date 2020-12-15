import Axios, {AxiosResponse} from 'axios';
import {useState, useEffect, useCallback} from 'react';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RequestMethods} from '../constants/common';
import {ERROR_NO_NETWORK_CONNECTION} from '../constants/errors';
import {RootState} from '../store';
import {isPlatformAndroid} from '../utils/common';
import {
  checkInternetConnection,
  offlineActionCreators,
} from 'react-native-offline';

interface IRequest {
  data: any | null;
  error: boolean;
}

const useHttpRequest = (url: string, method: string, body?: object) => {
  const dispatch = useDispatch();

  const isConnected = useSelector(
    (state: RootState) => state.network.isConnected,
  );

  const internetChecker = useCallback(async () => {
    const connectionState = await checkInternetConnection();
    const {connectionChange} = offlineActionCreators;
    dispatch(connectionChange(connectionState));
  }, [dispatch]);

  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState<IRequest>({
    data: null,
    error: false,
  });

  const proceedRequest = useCallback(() => {
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

    console.log('CALLING API: ', url);

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

  useEffect(() => {
    internetChecker();
  }, [internetChecker]);

  useEffect(() => {
    if (isConnected) {
      proceedRequest();
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
  }, [isConnected, proceedRequest]);

  return {request, isLoading};
};

export default useHttpRequest;
