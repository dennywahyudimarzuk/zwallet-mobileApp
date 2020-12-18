import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  ToastAndroid,
  Image,
  StyleSheet,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {PatchAll} from '../../redux/actions/Users';

const AddPhone = ({navigation}) => {
  const [phone, setPhone] = useState(0);
  const {data} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (phone.length < 10) {
      return ToastAndroid.show('Input Your Correct Number', 2000);
    } else {
      dispatch(PatchAll(data, {phone: phone}));
      navigation.navigate('Profile');
      ToastAndroid.show('Change Phone Success', 1000);
    }
  };

  return (
    <>
      <ScrollView style={styles.scroll}>
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
            <Text style={styles.find}>Add Phone Number</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 5}}>
          <View styles={{flexDirection: 'column'}}>
            <Text style={styles.formDesc}>
              Add at least one phone number for the transfer ID so you can start
              transfering your money to another user.
            </Text>
            <View style={styles.phone}>
              <Image
                style={{marginTop: 10, marginRight: 10}}
                source={require('../../icons/phone.png')}
              />
              <Text style={styles.number}>+62 </Text>
              <TextInput
                style={styles.inputPhone}
                placeholder="Enter Your Phone Number"
                autoCapitalize={'none'}
                maxLength={11}
                value={phone}
                onChangeText={(text) => setPhone(text)}
                returnKeyType="next"
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

export default AddPhone;

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
  phone: {
    marginTop: 50,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  inputPhone: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A3D42',
  },
  number: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#3A3D42',
  },
  formDesc: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#7A7886',
    marginTop: 20,
    marginHorizontal: 20,
    lineHeight: 28,
  },
});
