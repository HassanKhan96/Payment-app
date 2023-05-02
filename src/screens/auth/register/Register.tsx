import React, {useState} from 'react';
import {Button, Snackbar, Text, TextInput} from 'react-native-paper';
import styles from './styles';
import defaultStyles from '../../../styles/defualt.styles';
import {TouchableOpacity, View} from 'react-native';
import globalColors from '../../../styles/colors';
import {AuthContainer} from '../AuthContainer';
import {useNavigation} from '@react-navigation/native';
import routeNames from '../../../routes/routes.name';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {register} from '../../../store/slices/user/actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({status: false, message: ''});
  const [fullName, setFullName] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  const user = useAppSelector(state => state.user);
  const disptach = useAppDispatch();

  const onLogin = () => {
    disptach(register({email, password, fullName}));
  };

  return (
    <AuthContainer>
      <Snackbar
        style={{width: '100%'}}
        visible={alert.status}
        onDismiss={() => setAlert({message: '', status: false})}
        action={{
          label: 'Close',
          onPress: () => setAlert({message: '', status: false}),
        }}>
        {alert.message}
      </Snackbar>
      <Text variant="headlineLarge">Register</Text>
      <View>
        <TextInput
          style={defaultStyles.inputText}
          label="Full Name"
          mode="outlined"
          value={fullName}
          onChangeText={text => setFullName(text)}
          outlineColor={globalColors.secondary}
          left={<TextInput.Icon icon={'account'} />}
          disabled={user.loading}
        />
        <TextInput
          style={defaultStyles.inputText}
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          autoComplete="off"
          value={email}
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
          disabled={user.loading}
        />
      </View>

      <View style={styles.buttonSection}>
        <Button
          mode="contained"
          disabled={user.loading}
          loading={user.loading}
          onPress={onLogin}>
          Register
        </Button>

        <View style={styles.suggestionSection}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={{marginLeft: 5}}
            disabled={user.loading}
            onPress={() => navigation.navigate(routeNames.AUTH.LOGIN as never)}>
            <Text variant="bodyLarge" style={defaultStyles.linkColor}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
};

export default Register;
