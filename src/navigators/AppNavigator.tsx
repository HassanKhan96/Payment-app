import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../hooks';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import auth from '@react-native-firebase/auth';

const AppNavigator = () => {
  // const user = useAppSelector(state => state.user);
  const user = auth().currentUser;
  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
