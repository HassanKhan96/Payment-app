import {StyleSheet} from 'react-native';
import globalColors from '../../../styles/colors';

const addPaymentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  dueDateHeader: {marginTop: 10, color: globalColors.darkGray},

  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default addPaymentStyles;
