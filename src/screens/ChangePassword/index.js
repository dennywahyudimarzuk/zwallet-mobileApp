import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'


const ChangePassword = ({navigation}) => {
  const newPassword = React.useRef();
  const repeatPassword = React.useRef();

  // const [password, setPassword] = useState('')
  

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#fff'}}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 40,
              marginHorizontal: 10,
            }}>
            <RectButton onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                }}
                source={require('../../icons/arrow-left-black.png')}
              />
            </RectButton>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#514F5B',
                marginLeft: 15,
              }}>
              Reset Password
            </Text>
          </View>
          <Text style={styles.title}>
            You must enter your current password and then type your new password
            twice.
          </Text>
          <View style={[styles.password, {flexDirection: 'row'}]}>
            <Image style={{ marginTop : 10, marginRight: 10}} source={require('../../icons/lock.png')} />
            <TextInput
              placeholder="Current Password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              returnKeyType="next"
              onSubmitEditing={() => newPassword.current.focus()}
            />
          </View>
          <View style={[styles.password, {flexDirection: 'row'}]}>
            <Image style={{ marginTop : 10, marginRight: 10}} source={require('../../icons/lock.png')} />
            <TextInput
              ref={newPassword}
              placeholder="New Password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              returnKeyType="next"
              onSubmitEditing={() => repeatPassword.current.focus()}
            />
          </View>
          <View style={[styles.password, {flexDirection: 'row'}]}>
            <Image style={{ marginTop : 10, marginRight: 10}} source={require('../../icons/lock.png')} />
            <TextInput
              ref={repeatPassword}
              placeholder="Repeat Password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              returnKeyType="send"
            />
          </View>
          <RectButton style={styles.button}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 10,
              }}>
              Change Password
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  change: {
    color: '#3A3D42',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(58, 61, 66, 0.6)',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  password: {
    marginTop: 38,
    marginHorizontal: 20,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#6379F4',
    marginHorizontal: 20,
    height: 47,
    borderRadius: 10,
    marginTop: 170,
    alignItems: 'center',
    marginBottom: 20,
  },
});
