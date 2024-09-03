import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomHeader from '@common/CustomHeader';
import Profile from '@screens/profile/Profile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <CustomHeader title="Profile" />}}
        name="Profile Page"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
