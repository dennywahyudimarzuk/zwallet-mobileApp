import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {RectButton, FlatList, ScrollView} from 'react-native-gesture-handler';
import {Button, IconButton, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetTopup} from '../../redux/actions/Topup';
import {max} from 'react-native-reanimated';

const Topup = ({navigation}) => {
  const {data} = useSelector((state) => state.Auth);
  const {dataTopup} = useSelector((state) => state.Topup);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetTopup(data));
  }, []);

  const TopupResult = ({item, index}) => {
    return (
      <View style={styles.step}>
        <View
          style={{
            flexDirection: 'row',
            height: 90,
            marginHorizontal: 20,
          }}>
          <View style={{flex: 0.1, alignSelf: 'center'}}>
            <Text style={styles.stepnumber}>{item.sequence}</Text>
          </View>
          <View style={[styles.balance, {flex: 0.9}]}>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#7A7886'}}>
              {item.title}
            </Text>
          </View>
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
            <Text style={styles.find}>Topup</Text>
          </View>
          <View style={styles.virtual}>
            <View
              style={{
                flexDirection: 'row',
                height: 90,
                marginHorizontal: 20,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../icons/logo.png')}
              />
              <View style={[styles.balance, {flex: 0.8}]}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#7A7886',
                    marginBottom: 10,
                  }}>
                  Virtual Account Numbers
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#4D4B57',
                  }}>
                  2389 081393877946
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.topup}>How To Top-up</Text>
        <ScrollView style={{marginTop: 5, marginBottom: 5}}>
          <FlatList
            data={dataTopup}
            renderItem={TopupResult}
            style={{marginBottom: 10}}
          />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Topup;

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
  search: {
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
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
  topup: {
    flex: 0.5,
    fontSize: 18,
    fontWeight: '700',
    color: '#514F5B',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  stepnumber: {
    fontWeight: '700',
    fontSize: 18,
    color: '#6379F4',
  },
});
