import React from 'react';
import {
  StyledText,
  StyledView,
  StyledTouchableOpacity,
} from '@common/StyledComponents';
import {storage} from '@utils/MMKVStorage';

const Profile = () => {
  return (
    <StyledView>
      <StyledTouchableOpacity
        className="w-auto bg-red-600 p-4 m-4 rounded-xl"
        onPress={() => {
          storage.delete('token');
        }}>
        <StyledText className="text-white text-center text-2xl">
          Logout
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default Profile;
