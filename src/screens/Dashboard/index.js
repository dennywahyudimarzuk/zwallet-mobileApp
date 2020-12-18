import React from 'react';
import {BASE_URL} from '../../utils';
import {Image, View, StyleSheet, ToastAndroid} from 'react-native';
import {
  RectButton,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Button, IconButton, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetHistoryTransfer} from '../../redux/actions/HistoryTransfer';
import {io} from 'socket.io-client';
// import {GetUsers} from '../../redux/actions/Users';

const Login = ({navigation}) => {
  const {data} = useSelector((state) => state.Users);
  const {data: dataAuth} = useSelector((state) => state.Auth);
  const { dataHistory } = useSelector((state) => state.HistoryTransfer);
  const [balance, setBalance] = React.useState(0)
  const dispatch = useDispatch();
  const socket = io(BASE_URL);
  const {photo, id} = data;
  
  React.useEffect(() => {
    dispatch(GetHistoryTransfer(dataAuth));
    if (id) {
      socket.emit('initial-data', id)
      socket.once('get-data', (dataBalance) => {
        setBalance(dataBalance)
      })
    }
  }, [data, id]);
  

  const HistoryTransferResult = ({item, index}) => {
    return (
      <View style={styles.history}>
        <View
          style={{
            flexDirection: 'row',
            height: 90,
            marginHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
            }}
            source={{
              uri: `${BASE_URL}/images/${
                id == item.id_sender ? item.photo : item.photo_sender
              }`,
            }}
          />
          <View style={[styles.name, {flex: 0.5}]}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#4D4B57',
                marginBottom: 10,
              }}>
              {id == item.id_sender ? item.receiver : item.sender}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#7A7886'}}>
              {item.note}
            </Text>
          </View>
          <Text
            style={[
              styles.nominal,
              {
                flex: 0.4,
                textAlign: 'right',
                color: `#${id == item.id_sender ? 'FF5B37' : '1EC15F'}`,
              },
            ]}>
            {id == item.id_sender ? '-' : '+'}Rp.{item.amount}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.topbar}>
          <View
            style={{
              flexDirection: 'row',
              height: 110,
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <RectButton
              style={{alignSelf: 'center', flex: 0.1}}
              onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{width: 50, height: 50, borderRadius: 10}}
                source={{
                  uri: `${BASE_URL}/images/${photo}`,
                }}
              />
            </RectButton>
            <View style={[styles.balance, {flex: 0.7}]}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#D0D0D0',
                  marginBottom: 5,
                }}>
                Balance
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#FFF'}}>
                Rp.{balance}
              </Text>
            </View>
            <View style={{alignSelf: 'center', flex: 0.1}}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../../icons/bell.png')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'center',
          }}>
          <RectButton
            style={[styles.button, {flexDirection: 'row'}]}
            onPress={() => navigation.navigate('SearchReceiverTransfer')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../icons/arrow-up-transfer.png')}
            />
            <Text style={styles.textbutton}>Transfer</Text>
          </RectButton>
          <RectButton
            style={[styles.button, {flexDirection: 'row', marginLeft: 20}]}
            onPress={() => navigation.navigate('Topup')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../icons/plus.png')}
            />
            <Text style={styles.textbutton}>Top Up</Text>
          </RectButton>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 30,
          }}>
          <Text
            style={{
              flex: 0.5,
              fontSize: 18,
              fontWeight: '700',
              color: '#514F5B',
            }}>
            {' '}
            Transaction History{' '}
          </Text>
          <Text
            onPress={() => navigation.navigate('History')}
            style={{
              flex: 0.5,
              textAlign: 'right',
              fontSize: 14,
              fontWeight: '600',
              color: '#6379F4',
            }}>
            {' '}
            See All
          </Text>
        </View>
        <ScrollView style={{marginTop: 5, marginBottom: 5}}>
          <FlatList
            data={dataHistory}
            renderItem={HistoryTransferResult}
            style={{marginBottom: 10}}
          />
        </ScrollView>
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
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700',
    borderWidth: 1,
    marginRight: 10,
  },
  balance: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  topbar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#6379F4',
  },
  button: {
    backgroundColor: '#E5E8ED',
    height: 60,
    borderRadius: 10,
    flex: 0.5,
    marginTop: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  textbutton: {
    color: '#514F5B',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  nominal: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  history: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  name: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
