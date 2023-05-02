import {Button, IconButton} from 'react-native-paper';
import {useAppDispatch} from '../hooks';
import {logout} from '../store/slices/user/actions';
import globalColors from '../styles/colors';

const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      onPress={() => dispatch(logout())}
      icon={'logout'}
      iconColor={globalColors.primary}
    />
  );
};

export default LogoutBtn;
