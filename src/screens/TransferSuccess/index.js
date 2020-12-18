import React, { useState } from 'react';
import {BASE_URL} from '../../utils';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const TransferSuccess = ({ navigation }) => {
  const {data: dataTransfer} = useSelector((state) => state.Transfer);
  const {data: dataReceiver} = useSelector((state) => state.Receiver);
  const {data: dataUser} = useSelector((state) => state.Users);
  const {amount, note, date} = dataTransfer;
  const {balance} = dataUser;
  const { name, phone, photo } = dataReceiver;

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.topbar}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 40,
              marginHorizontal: 20,
            }}>
            <Text style={styles.find}>Transfer Details</Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              alignSelf: 'center',
              marginVertical: 30,
            }}
            source={require('../../icons/success.png')}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#514F5B',
            alignSelf: 'center',
            marginBottom: 30
          }}>
          Transfer Success
        </Text>
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
              Balance Left
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#514F5B'}}>
              Rp.{balance}
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#514F5B',
            marginTop: 40,
            marginBottom: 20,
            marginHorizontal: 20,
          }}>
          Transfer to
        </Text>
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
                {name}
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: '#7A7886'}}>
                +62{phone}
              </Text>
            </View>
          </View>
        </View>

        <RectButton
          style={styles.button}
          onPress={() => {
            // dispatch(GetHistoryTransfer(dataAuth))
            navigation.navigate('Dashboard')
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 10,
            }}>
            Back to Home
          </Text>
        </RectButton>
      </ScrollView>
    </>
  );
};

export default TransferSuccess;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
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
    marginTop: 40,
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
