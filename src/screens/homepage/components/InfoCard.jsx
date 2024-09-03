import {StyledText} from '@common/StyledComponents';
import {StyledTouchableOpacity} from '@common/StyledComponents';
import {useNavigation} from '@react-navigation/native';

const InfoCard = ({cardItem}) => {
  const navigation = useNavigation();

  return (
    <StyledTouchableOpacity
      className="w-auto bg-white shadow-zinc-300 rounded-lg p-4 m-3"
      onPress={() => navigation.navigate('Details')}>
      <StyledText className="mb-2 text-lg font-semibold text-black">
        {cardItem.name}
      </StyledText>
      <StyledText className="mb-2 text-black font-light">
        {cardItem.email}
      </StyledText>
      <StyledText className="mb-2 text-right text-zinc-300">
        {cardItem.company.name}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default InfoCard;
