import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../hooks';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const user = useAppSelector(state => state.user);
  return (
    <NavigationContainer>
      {!user.data ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
