import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Button, IconButton, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Signup as Register} from '../../redux/actions/Signup';

const Signup = ({navigation}) => {
  const inputEmail = React.useRef();
  const inputPassword = React.useRef();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pin, setPin] = React.useState('');
  const dispatch = useDispatch();

  const onSignup = () => {
    const data = {name, email, password, pin};
    dispatch(Register(data));
    setEmail('');
    setName('');
    setPassword('');
    setPin('');
    ToastAndroid.show('Signup was Success', 1000);
  };

  return (
    <>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <Text style={styles.zwallet}>Zwallet</Text>
        <View style={styles.container}>
          <Text style={styles.login}>Sign Up</Text>
          <Text style={styles.title}>
            Create your account to access Zwallet.
          </Text>
          <View style={styles.email}>
            <Image
              style={{marginTop: 10, marginRight: 10}}
              source={require('../../icons/person.png')}
            />
            <TextInput
              placeholder="Enter Your Username"
              autoCapitalize={'none'}
              onSubmitEditing={() => inputEmail.current.focus()}
              returnKeyType="next"
              value={name}
              onChangeText={(e) => setName(e)}
            />
          </View>
          <View style={styles.password}>
            <Image
              style={{marginTop: 10, marginRight: 10}}
              source={require('../../icons/mail.png')}
            />
            <TextInput
              ref={inputEmail}
              onSubmitEditing={() => inputPassword.current.focus()}
              placeholder="Enter your Email"
              autoCapitalize={'none'}
              returnKeyType="next"
              value={email}
              onChangeText={(e) => setEmail(e)}
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
              secureTextEntry={true}
              returnKeyType="send"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <View style={styles.password}>
            <Image
              style={{marginTop: 10, marginRight: 10}}
              source={require('../../icons/lock.png')}
            />
            <TextInput
              ref={inputPassword}
              placeholder="Enter your Pin"
              autoCapitalize={'none'}
              secureTextEntry={true}
              returnKeyType="send"
              value={pin}
              maxLength={6}
              keyboardType="numeric"
              onChangeText={(e) => setPin(e)}
            />
          </View>
          <RectButton style={styles.button} onPress={onSignup}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 10,
              }}>
              Sign Up
            </Text>
          </RectButton>
          <Text style={{textAlign: 'center', marginBottom: 20}}>
            Already have an account? Let’s
            <Text
              style={{color: '#6379F4'}}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Signup;

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
