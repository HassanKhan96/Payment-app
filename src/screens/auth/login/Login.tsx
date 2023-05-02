import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import styles from './styles';
import defaultStyles from '../../../styles/defualt.styles';
import {TouchableOpacity, View} from 'react-native';
import globalColors from '../../../styles/colors';
import {AuthContainer} from '../AuthContainer';
import {useNavigation} from '@react-navigation/native';
import routeNames from '../../../routes/routes.name';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {login} from '../../../store/slices/user/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  const user = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const onLogin = () => {
    dispatch(login({email, password}));
  };

  return (
    <AuthContainer>
      <Text variant="headlineLarge">Login</Text>
      <View>
        <TextInput
          style={defaultStyles.inputText}
          label="Email"
          mode="outlined"
          value={email}
          autoCapitalize={'none'}
          autoComplete="off"
          onChangeText={text => setEmail(text)}
          outlineColor={globalColors.secondary}
          left={<TextInput.Icon icon={'email'} />}
          disabled={user.loading}
        />
        <TextInput
          style={defaultStyles.inputText}
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={text => setPassword(text)}
          outlineColor={globalColors.secondary}
          secureTextEntry={hidePassword}
          disabled={user.loading}
          left={<TextInput.Icon icon={'account-lock'} />}
          right={
            hidePassword ? (
              <TextInput.Icon
                icon={'eye'}
                onPress={() => setHidePassword(false)}
              />
            ) : (
              <TextInput.Icon
                icon={'eye-off'}
                onPress={() => setHidePassword(true)}
              />
            )
          }
        />
      </View>
      <View style={styles.buttonSection}>
        <Button
          disabled={user.loading}
          loading={user.loading}
          mode="contained"
          onPress={onLogin}>
          Login
        </Button>
        <View style={styles.suggestionSection}>
          <Text> Don't have an account?</Text>
          <TouchableOpacity
            style={{marginLeft: 5}}
            onPress={() =>
              navigation.navigate(routeNames.AUTH.REGISTER as never)
            }>
            <Text variant="bodyLarge" style={defaultStyles.linkColor}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
};

export default Login;
