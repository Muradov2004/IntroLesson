import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/login/Login';
import CustomHeader from '@common/CustomHeader';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <CustomHeader title="Login" />}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
