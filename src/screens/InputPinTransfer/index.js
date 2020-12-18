import React, {useState} from 'react';
import {View, ScrollView, ToastAndroid, Image, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
import {CreateTransfer} from '../../redux/actions/Transfer.js';
import { GetHistoryTransfer } from '../../redux/actions/HistoryTransfer.js';

const InputPinTransfer = ({navigation}) => {
  const [pincode, setPincode] = useState('');
  const {data} = useSelector((state) => state.Auth);
  const {data: dataReceiver} = useSelector((state) => state.Receiver);
  const {data: dataTransfer} = useSelector((state) => state.Transfer);
  const {
    note,
    amount,
    pin,
    id_Receiver,
    photo_sender,
    sender,
    id_sender,
  } = dataTransfer;
  const {phone} = dataReceiver;
  const dispatch = useDispatch();

  const onTransferStatus = () => {
    if (pincode == pin) {
      dispatch(
        CreateTransfer(data, {
          id_receiver: id_Receiver,
          phone: phone,

          amount: amount,
          note: note,

          photo_sender: photo_sender,
          sender: sender,
          id_sender: id_sender,
          pin: pincode,   
        }),
      );
      navigation.navigate('TransferSuccess');
    } else {
      ToastAndroid.show('PIN is Wrong', 1000);
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
            <RectButton onPress={() => navigation.navigate('InputAmount')}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                }}
                source={require('../../icons/arrow-left.png')}
              />
            </RectButton>
            <Text style={styles.find}>Enter Your Pin</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5}}>
          <View styles={{flexDirection: 'column'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>Enter Pin To Transfer</Text>
              <Text style={styles.formDesc}>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </Text>

              <SmoothPinCodeInput
                codeLength={6}
                cellStyle={{
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: 'rgba(169, 169, 169, 0.6)',
                }}
                cellStyleFocused={{
                  borderColor: '#6379F4',
                }}
                value={pincode}
                onTextChange={(code) => setPincode(code)}
              />
            </View>
          </View>
        </View>

        <RectButton style={styles.button} onPress={onTransferStatus}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 10,
            }}>
            Transfer Now
          </Text>
        </RectButton>
      </ScrollView>
    </>
  );
};

export default InputPinTransfer;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  topbar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#6379F4',
  },
  button: {
    backgroundColor: '#6379F4',
    marginHorizontal: 20,
    height: 47,
    borderRadius: 10,
    marginTop: 230,
    alignItems: 'center',
    marginBottom: 15,
  },
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',
    color: '#7A7886',
    marginTop: 40
  },
  formDesc: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#7A7886',
    marginTop: 20,
    marginBottom: 50,
    lineHeight: 28,
  },
});