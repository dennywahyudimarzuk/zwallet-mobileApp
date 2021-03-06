import React, {useState} from 'react';
import {View, ScrollView, ToastAndroid, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
import {GetUsers} from '../../redux/actions/Users';

const ChangePin = ({navigation}) => {
  const [newPin, setPin] = useState('');
  const {data} = useSelector((state) => state.Auth);
  const {data: dataUsers} = useSelector((state) => state.Users);
  const {pin} = dataUsers;
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (newPin.length < 6) {
      return ToastAndroid.show('Enter Your Pin', 2000);
    } else if (newPin == pin) {
      dispatch(GetUsers(data, newPin));
      navigation.navigate('NewPin');
    } else {
      return ToastAndroid.show('Wrong Pin', 2000);
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
            <RectButton onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                }}
                source={require('../../icons/arrow-left.png')}
              />
            </RectButton>
            <Text style={styles.find}>Change Pin</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5}}>
          <View styles={{flexDirection: 'column'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.formDesc}>
                Enter your current 6 digits Zwallet PIN below to continue to the
                next steps.
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
                value={newPin}
                onTextChange={(code) => setPin(code)}
              />
            </View>
          </View>
        </View>
        <RectButton style={styles.button} onPress={onSubmit}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 10,
            }}>
            Continue
          </Text>
        </RectButton>
      </ScrollView>
    </>
  );
};

export default ChangePin;

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
    marginTop: 40,
  },
  formDesc: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#7A7886',
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 20,
    lineHeight: 28,
  },
});
