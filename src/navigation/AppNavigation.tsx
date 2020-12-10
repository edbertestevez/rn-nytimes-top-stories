import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoutes} from './AppRoutes';

//Containers
import Newsfeed from '../components/containers/News/Newsfeed';
import Details from '../components/containers/News/Details';
import {defaultTheme} from '../styles/theme';

//Reference
export const navigationRef = React.createRef<NavigationContainerRef>();

//StackNavigator
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={AppRoutes.NEWSFEED}
        screenOptions={{
          headerStyle: {backgroundColor: defaultTheme.PRIMARY_HEADER_COLOR},
          headerTintColor: defaultTheme.PRIMARY_HEADER_TEXT_COLOR
        }}>
        <Stack.Screen
          name={AppRoutes.NEWSFEED}
          options={{title: 'NYT News Feed'}}
          component={Newsfeed}
        />
        <Stack.Screen
          name={AppRoutes.NEWS_DETAILS}
          options={{
            headerShown: false,
          }}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
