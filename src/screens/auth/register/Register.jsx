import {
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from '@common/StyledComponents';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import {storage} from '@utils/MMKVStorage';

const Register = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const submitData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        storage.set('token', JSON.stringify(result));

        navigation.navigate('Login');
      } else {
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleInputChange = (inputName, inputValue) => {
    setFormData(prevState => ({...prevState, [inputName]: inputValue}));
  };

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{flex: 1}}>
      <StyledView className="flex-1 bg-white items-center justify-center px-5">
        <StyledText className="text-3xl font-semibold mb-4">
          Register
        </StyledText>

        <Input
          inputName="username"
          inputValue={formData?.username}
          handleInputChange={handleInputChange}
          placeholder="Enter username"
          error={errors?.username}
        />

        <Input
          inputName="email"
          inputValue={formData?.email}
          handleInputChange={handleInputChange}
          placeholder="Enter email"
          error={errors?.email}
        />

        <PasswordInput
          inputName="password"
          inputValue={formData.password}
          handleInputChange={handleInputChange}
          placeholder="Enter password"
          error={errors?.password}
        />

        <StyledTouchableOpacity
          onPress={submitData}
          className="w-full py-5 bg-blue-700 mt-3 rounded-lg">
          <StyledText className="text-center text-white">Submit</StyledText>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          className="w-full mt-5">
          <StyledText className="text-center text-black">
            Already have an account?
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </KeyboardAwareScrollView>
  );
};

export default Register;
