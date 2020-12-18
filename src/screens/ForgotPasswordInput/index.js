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

const ForgotPasswordInput = ({navigation}) => {
  const inputPassword = React.useRef();
  return (
    <>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <Text style={styles.zwallet}>Zwallet</Text>
        <View style={styles.container}>
          <Text style={styles.login}>Reset Password</Text>
          <Text style={styles.title}>
            Create and confirm your new password so you can login to Zwallet.
          </Text>
          <View style={styles.password}>
            <TextInput
              placeholder="Create new password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              returnKeyType="next"
              onSubmitEditing={() => inputPassword.current.focus()}
            />
          </View>
          <View style={styles.password}>
            <TextInput
              ref={inputPassword}
              placeholder="Confirm new password"
              autoCapitalize={'none'}
              secureTextEntry={true}
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
              Reset Password
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPasswordInput;

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
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
});
