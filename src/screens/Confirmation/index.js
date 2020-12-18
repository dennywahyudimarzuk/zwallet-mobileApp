import React from 'react';
import {BASE_URL} from '../../utils';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text } from 'react-native-paper';
import {useSelector} from 'react-redux';

const Confirmation = ({ navigation }) => {
  const {data: dataTransfer} = useSelector((state) => state.Transfer);
  const {data: dataReceiver} = useSelector((state) => state.Receiver);
  const { balanceLeft, note, amount, date } = dataTransfer;
  const {name: nameReceiver, photo, phone, id: id_Receiver} = dataReceiver;
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
            <Text style={styles.find}>Transfer</Text>
          </View>
          <View style={styles.virtual}>
            <View
              style={{
                flexDirection: 'row',
                height: 90,
                marginHorizontal: 20,
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={{height: 50, width: 50, borderRadius: 10}}
                  source={{
                    uri: `${BASE_URL}/images/${photo}`,
                  }}
                />
              </View>
              <View style={styles.balance}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#4D4B57',
                    marginBottom: 10,
                  }}>
                  {nameReceiver}
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '400', color: '#7A7886'}}>
                  +62{phone}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.history}>
          <View style={styles.balance}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#4D4B57',
                marginBottom: 10,
              }}>
              Amount
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#514F5B'}}>
              Rp.{amount}
            </Text>
          </View>
        </View>
        <View style={styles.history}>
          <View style={styles.balance}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#4D4B57',
                marginBottom: 10,
              }}>
              Balance
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#514F5B'}}>
              Rp.{balanceLeft}
            </Text>
          </View>
        </View>
        {/* <View style={styles.history}>
          <View style={styles.balance}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#4D4B57',
                marginBottom: 10,
              }}>
              Date & Time
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#514F5B'}}>
              {date}
            </Text>
          </View>
        </View> */}
        <View style={styles.history}>
          <View style={styles.balance}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#4D4B57',
                marginBottom: 10,
              }}>
              Notes
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#514F5B'}}>
              {note}
            </Text>
          </View>
        </View>

        <RectButton
          style={styles.button}
          onPress={() => navigation.navigate('InputPinTransfer')}>
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

export default Confirmation;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  balance: {
    alignSelf: 'center',
    marginLeft: 15,
  },
  topbar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#6379F4',
  },
  step: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  virtual: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  fillamount: {
    textAlign: 'center',
    marginVertical: 30,
    color: '#6379F4',
    fontSize: 42,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C7895',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  notes: {
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
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
  history: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    height: 90,
  },
});
