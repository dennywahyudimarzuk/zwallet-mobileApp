import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

import {useSelector} from 'react-redux';

const PersonalInformation = ({navigation}) => {
  const {data} = useSelector((state) => state.Users);
  const {name, phone, email} = data;

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 40,
            marginHorizontal: 10,
          }}>
          <RectButton onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                height: 28,
                width: 28,
              }}
              source={require('../../icons/arrow-left-black.png')}
            />
          </RectButton>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#514F5B',
              marginLeft: 15,
            }}>
            Personal Information
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            marginHorizontal: 10,
            marginBottom: 40,
          }}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
        <View style={styles.history}>
          <View
            style={{
              flexDirection: 'row',
              height: 90,
              marginHorizontal: 20,
            }}>
            <View style={styles.menu}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#7A7886',
                  marginBottom: 10,
                }}>
                Firstname
              </Text>
              <Text style={{fontSize: 22, fontWeight: '700', color: '#7A7886'}}>
                {name.split(' ')[0]}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history}>
          <View
            style={{
              flexDirection: 'row',
              height: 90,
              marginHorizontal: 20,
            }}>
            <View style={styles.menu}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#7A7886',
                  marginBottom: 10,
                }}>
                Lastname
              </Text>
              <Text style={{fontSize: 22, fontWeight: '700', color: '#7A7886'}}>
                {name.split(' ').length > 1 ? name.split(' ')[1] : '-'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history}>
          <View
            style={{
              flexDirection: 'row',
              height: 90,
              marginHorizontal: 20,
            }}>
            <View style={styles.menu}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#7A7886',
                  marginBottom: 10,
                }}>
                Verified E-mail
              </Text>
              <Text style={{fontSize: 22, fontWeight: '700', color: '#7A7886'}}>
                {email}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history}>
          <View
            style={{
              flexDirection: 'row',
              height: 90,
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <View style={styles.menu}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#7A7886',
                  marginBottom: 10,
                }}>
                Phone Number
              </Text>
              <Text style={{fontSize: 22, fontWeight: '700', color: '#7A7886'}}>
                +62{phone}
              </Text>
            </View>
            <Text
              onPress={() => navigation.navigate('AddPhone')}
              style={{alignSelf: 'center', color: '#6379F4'}}>
              Manage
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  search: {
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
  },
  menu: {
    alignSelf: 'center',
    marginRight: 10,
  },
  topbar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#6379F4',
  },
  history: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
    marginHorizontal: 10,
  },
});
