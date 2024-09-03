import {
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from '@common/StyledComponents';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title}) => {
  const navigation = useNavigation();
  const disabled = navigation.canGoBack();
  return (
    <StyledView className="w-full bg-slate-500 items-center justify-center">
      {disabled && (
        <StyledTouchableOpacity
          className="absolute left-3"
          onPress={() => navigation.goBack()}>
          <StyledText>{'< Back'}</StyledText>
        </StyledTouchableOpacity>
      )}
      <StyledText className="text-white font-poppi-medium text-[20px] pb-5 pt-6">
        {title}
      </StyledText>
    </StyledView>
  );
};

export default CustomHeader;
