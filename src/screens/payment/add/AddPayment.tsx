import {Pressable, View} from 'react-native';
import {
  Button,
  HelperText,
  IconButton,
  Text,
  TextInput,
} from 'react-native-paper';
import globalColors from '../../../styles/colors';
import defaultStyles from '../../../styles/defualt.styles';
import addPaymentStyles from './styles';
import DatePicker from 'react-native-date-picker';
import {useEffect, useState} from 'react';
import moment from 'moment';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {addPayment} from '../../../store/slices/payments/actions';
import CustomDialog from '../../../components/CustomDialog';
import {useNavigation} from '@react-navigation/native';

const AddPaymentValidation = Yup.object().shape({
  title: Yup.string().required('Title required!'),
  description: Yup.string().required('Description required!'),
});

const AddPayment = () => {
  const [showDate, setShowDate] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [data, setData] = useState<unknown>(null);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {loading, addPayments} = useAppSelector(state => state.payment);

  useEffect(() => {
    if (addPayments === 'success') navigation.goBack();
  }, [addPayments]);

  const onSubmit = (values: any) => {
    dispatch(addPayment(values));
  };
  return (
    <View style={[defaultStyles.container, addPaymentStyles.container]}>
      <CustomDialog
        title="Add Payment"
        description="Are you sure you want to add payment?"
        onAgree={() => onSubmit(data)}
        visible={showDialog}
        onDismiss={() => setShowDialog(false)}
        onDisagree={() => setShowDialog(false)}
      />
      <Formik
        initialValues={{
          title: '',
          description: '',
          date: new Date().toISOString(),
        }}
        onSubmit={values => {
          setData(values);
          setShowDialog(true);
        }}
        validationSchema={AddPaymentValidation}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => {
          return (
            <>
              <View>
                <TextInput
                  label={'Title'}
                  mode="outlined"
                  style={[defaultStyles.inputText, {marginBottom: 0}]}
                  value={values.title}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur}
                  outlineColor={
                    errors.title ? globalColors.danger : globalColors.primary
                  }
                />
                <HelperText
                  type="error"
                  visible={!!errors.title}
                  padding="none">
                  {errors.title}
                </HelperText>
              </View>
              <View>
                <TextInput
                  label={'Description'}
                  mode="outlined"
                  numberOfLines={10}
                  multiline
                  value={values.description}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur}
                  style={[
                    defaultStyles.inputText,
                    {
                      height: 100,
                      marginBottom: 0,
                    },
                  ]}
                  outlineColor={
                    errors.description
                      ? globalColors.danger
                      : globalColors.primary
                  }
                />
                <HelperText
                  type="error"
                  visible={!!errors.description}
                  padding="none">
                  {errors.description}
                </HelperText>
              </View>
              <Text
                variant="titleMedium"
                style={addPaymentStyles.dueDateHeader}>
                Due Date
              </Text>
              <Pressable
                style={addPaymentStyles.dueDateContainer}
                onPress={() => setShowDate(true)}>
                <Text variant="titleSmall">
                  {moment(values.date).format('DD/MM/YYYY')}
                </Text>
                <IconButton
                  icon={'pencil'}
                  size={20}
                  borderless={true}
                  iconColor={globalColors.primary}
                  style={{padding: 0, margin: 0}}
                />
              </Pressable>
              <DatePicker
                modal
                mode="date"
                open={showDate}
                date={new Date(values.date)}
                onConfirm={date => {
                  setShowDate(false);
                  handleChange('date')(date.toISOString());
                }}
                onCancel={() => {
                  setShowDate(false);
                }}
              />

              <Button
                onPress={handleSubmit}
                style={{marginTop: 15}}
                mode="contained">
                Submit
              </Button>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default AddPayment;
