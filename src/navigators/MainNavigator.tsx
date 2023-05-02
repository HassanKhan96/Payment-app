import {createStackNavigator} from '@react-navigation/stack';
import LogoutBtn from '../components/LogoutBtn';
import ROUTES from '../routes/routes';

const Stack = createStackNavigator();
const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <LogoutBtn />,
      }}>
      {ROUTES.PAYMENT.map((route, ind) => {
        return (
          <Stack.Screen
            key={ind + Math.random()}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
