import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Button, IconButton, Text} from 'react-native-paper';
import {max} from 'react-native-reanimated';

const ForgotPassword = ({navigation}) => {
  const inputPassword = React.useRef();
  return (
    <>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <Text style={styles.zwallet}>Zwallet</Text>
        <View style={styles.container}>
          <Text style={styles.login}>Reset Password</Text>
          <Text style={styles.title}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
          <View style={styles.email}>
            <TextInput
              placeholder="Enter your E-mail"
              autoCapitalize={'none'}
              returnKeyType="send"
            />
          </View>
          <RectButton
            style={styles.button}
            onPress={() => navigation.navigate('ForgotPasswordInput')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 10
              }}>
              Confirm
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;

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
      textAlign: 'center',
    marginHorizontal: 20
  },
  email: {
    marginTop: 38,
    marginHorizontal: 20,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#6379F4',
    marginHorizontal: 20,
    height: 47,
    borderRadius: 10,
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
});
