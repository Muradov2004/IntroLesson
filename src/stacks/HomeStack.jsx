import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from '@screens/homepage/Homepage';
import Detailspage from '@screens/detailspage/Detailspage';
import CustomHeader from '@common/CustomHeader';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <CustomHeader title="Home" />}}
        name="Homepage"
        component={Homepage}
      />
      <Stack.Screen
        options={{header: () => <CustomHeader title="Details" />}}
        name="Detailspage"
        component={Detailspage}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
