import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text } from 'react-native-paper';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

const InputPin = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.zwallet}>Zwallet</Text>
        <View style={styles.container}>
          <Text style={styles.login}>Create Security PIN</Text>
          <Text style={styles.title}>
            Create a PIN that’s contain 6 digits number for
          </Text>
          <Text style={styles.title}>security purpose in Zwallet.</Text>
         
          <RectButton
            style={styles.button}
            onPress={() => navigation.navigate('InputPinSuccess')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 10,
              }}>
              Confirm
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default InputPin;

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
  pin: {
    marginTop: 38,
    borderWidth: 1,
    borderRadius: 10,
    width: 50
  },

  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
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
