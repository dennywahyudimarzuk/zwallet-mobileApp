import React from 'react';
import {BASE_URL} from '../../utils';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {PreCreateTransfer} from '../../redux/actions/Transfer';

const InputAmount = ({navigation}) => {
  const [note, setNote] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const {data: dataReceiver} = useSelector((state) => state.Receiver);
  const {data} = useSelector((state) => state.Users);
  const { name: nameReceiver, photo, phone, id: id_Receiver } = dataReceiver;
  const { balance, pin, photo: photo_sender, id, name } = data;
  const dispatch = useDispatch();

 const toConfirmation = () => {
   const balanceLeft = balance - amount;
   if (amount <= 0) {
     return ToastAndroid.show('Please fill Amount.', 1000);
   } else if (parseInt(balance) - amount <= 0) {
     return ToastAndroid.show("You don't have enough money to transfer", 1000);
   } else {
     dispatch(
       PreCreateTransfer({
         receiver: nameReceiver,
         id_Receiver: id_Receiver,
         photo: photo,

         balanceLeft: balanceLeft,
         amount: amount,
         note: note,
         
         pin: pin,
         photo_sender: photo_sender,
         sender: name,
         id_sender: id
       }),
     );
     navigation.navigate('Confirmation');
   }
 };

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.topbar}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 40,
              marginHorizontal: 20,
            }}>
            <RectButton
              onPress={() => navigation.navigate('SearchReceiverTransfer')}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                }}
                source={require('../../icons/arrow-left.png')}
              />
            </RectButton>
            <Text style={styles.find}>Transfer</Text>
          </View>
          <View style={styles.virtual}>
            <View
              style={{
                flexDirection: 'row',
                height: 90,
                marginHorizontal: 20,
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={{height: 50, width: 50, borderRadius: 10}}
                  source={{
                    uri: `${BASE_URL}/images/${photo}`,
                  }}
                />
              </View>
              <View style={styles.balance}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#4D4B57',
                    marginBottom: 10,
                  }}>
                  {nameReceiver}
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#7A7886'}}>
                  +62{phone}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TextInput
          style={styles.fillamount}
          placeholder="0.00"
          value={amount}
          onChangeText={(e) => (e == '' ? setAmount(0) : setAmount(e))}
          keyboardType="numeric"
        />
        <Text style={styles.amount}>
          Rp.{' '}
          {parseInt(balance) - amount <= 0
            ? 0
            : parseInt(balance) - parseInt(amount)}{' '}
          Available
        </Text>
        <View style={styles.notes}>
          <Image
            style={{marginTop: 10, marginRight: 10}}
            source={require('../../icons/edit-2.png')}
          />
          <TextInput
            placeholder="Add some notes"
            autoCapitalize={'none'}
            onChangeText={(text) => setNote(text)}
            onSubmitEditing={() => toConfirmation()}
            returnKeyType="send"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default InputAmount;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  balance: {
    alignSelf: 'center',
    marginLeft: 15,
  },
  topbar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#6379F4',
  },
  step: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  virtual: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  fillamount: {
    textAlign: 'center',
    marginVertical: 30,
    color: '#6379F4',
    fontSize: 42,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C7895',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  notes: {
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#6379F4',
    marginHorizontal: 20,
    height: 47,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 15,
  },
});
