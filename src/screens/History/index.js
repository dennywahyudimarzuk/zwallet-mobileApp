import React from 'react';
import {BASE_URL} from '../../utils';
import {Image, View, StyleSheet} from 'react-native';
import {RectButton, FlatList, ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetHistoryTransferAll} from '../../redux/actions/HistoryTransfer';

const History = ({navigation}) => {
  const {data} = useSelector((state) => state.Users);
  const {data: dataAuth} = useSelector((state) => state.Auth);
  const {dataHistoryAll} = useSelector((state) => state.HistoryTransfer);
  const dispatch = useDispatch();
  const {id} = data;

  React.useEffect(() => {
    dispatch(GetHistoryTransferAll(dataAuth));
  }, [dataHistoryAll]);

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
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 40,
              marginHorizontal: 20,
            }}>
            <RectButton onPress={() => navigation.navigate('Dashboard')}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                }}
                source={require('../../icons/arrow-left.png')}
              />
            </RectButton>
            <Text style={styles.find}>History</Text>
          </View>
        </View>
        <ScrollView style={{marginTop: 5, marginBottom: 5}}>
          <FlatList
            data={dataHistoryAll}
            renderItem={HistoryTransferResult}
            style={{marginBottom: 10}}
          />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default History;

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
    marginBottom: 10
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
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
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
