import CustomHeader from '@common/CustomHeader';
import {StyledView} from './StyledComponents';
import {React} from 'react';

const Layout = ({children, title}) => {
  return <StyledView className="flex-1 px-4">{children}</StyledView>;
};

export default Layout;
