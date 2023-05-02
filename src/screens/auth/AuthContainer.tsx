import {ScrollView, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {Text} from 'react-native-paper';

type props = {
  children: ReactNode;
};

export const AuthContainer = ({children}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Icons name="notebook" size={75} color={'#fff'} />
        <Text variant="titleLarge" style={styles.topSectionText}>
          Payment Reminder
        </Text>
      </View>
      <View style={styles.inputSection}>{children}</View>
    </View>
  );
};

export default AuthContainer;
