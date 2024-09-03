import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabStack from './TabStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const isAuthenticated = true;

  const linking = {
    prefixes: ['introlesson://'],
    config: {
      screens: {
        Home: {
          path: 'home/',
          screens: {
            Homepage: {
              path: 'homepage/',
            },
            Detailspage: {
              path: 'details/:id',
            },
          },
        },

        Profile: {
          path: 'profile/',
          screens: {
            Profile: {
              path: 'index/',
            },
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      {isAuthenticated ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
