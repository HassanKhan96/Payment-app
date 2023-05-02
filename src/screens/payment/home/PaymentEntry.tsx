import {TouchableOpacity, View} from 'react-native';
import {Card, Chip, Text} from 'react-native-paper';
import paymentStyles from './styles';

type itemData = {
  title: string;
  description: string;
  isPaid: boolean;
};

type itemProps = {
  item: itemData;
  onPress: () => void;
};

const PaymentEntry = ({item, onPress}: itemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={paymentStyles.itemContainer} mode="contained">
        <View style={paymentStyles.itemSection}>
          <Text variant="headlineSmall" style={{marginRight: 10}}>
            {item.title}
          </Text>
          {item.isPaid ? (
            <Chip
              mode="flat"
              style={paymentStyles.chipSuccess}
              textStyle={paymentStyles.chipText}>
              Paid
            </Chip>
          ) : (
            <Chip
              mode="flat"
              style={paymentStyles.chipFailed}
              textStyle={paymentStyles.chipText}>
              Unpaid
            </Chip>
          )}
        </View>
        <View style={paymentStyles.itemDescription}>
          <Text variant="labelLarge">{item.description.substring(0, 50)}</Text>
        </View>
        <View style={paymentStyles.dateSection}>
          <Text variant="labelMedium" style={paymentStyles.dateText}>
            16 May 2023
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default PaymentEntry;
