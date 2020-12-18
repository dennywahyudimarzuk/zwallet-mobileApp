import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { AuthLogin } from '../../redux/actions/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const inputPassword = React.useRef();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { token: device_token } = useSelector((state) => state.Device);
  const dispatch = useDispatch();
  
  const onSubmit = () => {
  let data = {};
  if (email.length < 1  || password.length < 1) {
    return ToastAndroid.show('Enter your email/password', 2000);
  }
  if (device_token.length > 0) {
    data = {
      email,
      password,
      device_token: device_token,
    };
    dispatch(AuthLogin(device_token, data));
  } else {
    AsyncStorage.getItem('device_token').then((res) => {
      if (!res) {
        return ToastAndroid.show('Device not detect! Please reopen app', 2000);
      }
      data = {
        email,
        password,
        device_token: res,
      };
      dispatch(AuthLogin(res, data));
    });
    AsyncStorage.removeItem('device_token');
  }
  };
  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.zwallet}>Zwallet</Text>
        <View style={styles.container}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.title}>
            Login to your existing account to access
          </Text>
          <Text style={styles.title}>all the features in Zwallet.</Text>
          <View style={styles.email}>
            <Image
              style={{marginTop: 10, marginRight: 10}}
              source={require('../../icons/mail.png')}
            />
            <TextInput
              placeholder="Enter your E-mail"
              autoCapitalize={'none'}
              value={email}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => inputPassword.current.focus()}
              returnKeyType="next"
            />
          </View>
          <View style={styles.password}>
            <Image
              style={{marginTop: 10, marginRight: 10}}
              source={require('../../icons/lock.png')}
            />
            <TextInput
              ref={inputPassword}
              placeholder="Enter your Password"
              autoCapitalize={'none'}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              returnKeyType="send"
            />
          </View>
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{color: '#6379F4'}}>Forgot Password?</Text>
          </TouchableOpacity>
          <RectButton
            style={styles.button}
            onPress={onSubmit}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 10,
              }}>
              Login
            </Text>
          </RectButton>
          <Text style={{ textAlign: 'center' }}>
            Don’t have an account? Let’s
            <Text
              style={{color: '#6379F4'}}
              onPress={() => navigation.navigate('Signup')}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  zwallet: {
    alignSelf: 'center',
    color: '#6379F4',
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 61,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  login: {
    color: '#3A3D42',
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(58, 61, 66, 0.6)',
    alignSelf: 'center',
    marginBottom: 10,
  },
  email: {
    marginTop: 38,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  password: {
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  forgot: {
    marginHorizontal: 20,
    marginTop: 5,
    alignSelf: 'flex-end',
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
