import {StyleSheet} from 'react-native';
import globalColors from '../../../styles/colors';

const paymentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addSection: {
    marginTop: 5,
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: globalColors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 7.5,
  },
  itemSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDescription: {
    marginVertical: 5,
  },
  itemStatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipSuccess: {
    backgroundColor: globalColors.success,
    borderRadius: 50,
  },
  chipFailed: {
    backgroundColor: globalColors.danger,
    borderRadius: 50,
  },
  chipText: {
    color: globalColors.white,
    fontWeight: '600',
  },
  dateSection: {
    marginTop: 5,
  },
  dateText: {
    fontWeight: '600',
    color: globalColors.darkGray,
  },
});

export default paymentStyles;
