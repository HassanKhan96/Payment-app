import {useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import {Button} from 'react-native-paper';
import routeNames from '../../../routes/routes.name';
import defaultStyles from '../../../styles/defualt.styles';
import PaymentEntry from './PaymentEntry';
import paymentStyles from './styles';

const Payment = (): JSX.Element => {
  const navigation = useNavigation();
  const payments = [
    {
      title: 'Test',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isPaid: false,
    },
    {
      title: 'Test2',
      description: 'description',
      isPaid: true,
    },
    {
      title: 'Test3',
      description: 'description',
      isPaid: false,
    },
    {
      title: 'Test4',
      description: 'description',
      isPaid: true,
    },
    {
      title: 'Test4',
      description: 'description',
      isPaid: true,
    },
    {
      title: 'Test4',
      description: 'description',
      isPaid: true,
    },
  ];
  return (
    <View style={[defaultStyles.container, paymentStyles.container]}>
      <View style={paymentStyles.addSection}>
        <Button
          mode="contained"
          icon={'plus'}
          onPress={() => navigation.navigate(routeNames.PAYMENT.ADD as never)}>
          Add Payment
        </Button>
      </View>
      <FlatList
        data={payments}
        keyExtractor={(item, index) => (index + Math.random()).toString()}
        renderItem={({item, index}) => {
          return (
            <PaymentEntry
              item={item}
              onPress={() =>
                navigation.navigate(routeNames.PAYMENT.ADD as never)
              }
            />
          );
        }}
      />
    </View>
  );
};

export default Payment;
