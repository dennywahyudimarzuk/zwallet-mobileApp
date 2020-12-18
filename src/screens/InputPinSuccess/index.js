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

const InputPinSuccess = ({navigation}) => {
  const inputPassword = React.useRef();
  return (
    <>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <Text style={styles.zwallet}>Zwallet</Text>
        <View style={styles.container}>
          <Image
            style={{marginTop: 40, alignSelf: 'center'}}
            source={require('../../icons/success.png')}
          />
          <Text style={styles.login}>PIN Successfully Created</Text>
          <Text style={styles.title}>
            Your PIN was successfully created and you can now access all the
            features in Zwallet. Login to your new account and start exploring!
          </Text>
          <RectButton
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 10,
              }}>
              Login Now
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default InputPinSuccess;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  zwallet: {
    alignSelf: 'center',
    color: '#6379F4',
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 120,
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
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(58, 61, 66, 0.6)',
    alignSelf: 'center',
      marginBottom: 10,
      textAlign: 'center'
  },
  pin: {
    marginTop: 38,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
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
