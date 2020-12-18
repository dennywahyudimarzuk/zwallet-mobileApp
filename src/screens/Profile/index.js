import React from 'react';
import {BASE_URL} from '../../utils';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-picker';

import {AuthLogout} from '../../redux/actions/Auth';
import {PatchPhoto, GetUsers} from '../../redux/actions/Users';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const {data: dataAuth} = useSelector((state) => state.Auth);
  const {token: device_token} = useSelector((state) => state.Device);
  const {data} = useSelector((state) => state.Users);
  const {name, phone, photo} = data;
  const dispatch = useDispatch();
  const sheetRef = React.useRef(null);

  React.useEffect(() => {
    dispatch(GetUsers(dataAuth));
    sheetRef.current.snapTo(1);
  }, [photo]);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelSubtitle}>Upload Profile Picture</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Select Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const takePhotoFromCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
      },
      (res) => {
        const photo = new FormData();
        photo.append('photo', {
          uri: res.uri,
          name: res.fileName,
          type: res.type,
        });
        dispatch(PatchPhoto(dataAuth, photo));
        // ToastAndroid.show('Success Change Photo', 1000);
      },
    );
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (res) => {
        console.log(res)
        const photo = new FormData();
        photo.append('photo', {
          uri: res.uri,
          name: res.fileName,
          type: res.type,
        });
        dispatch(PatchPhoto(dataAuth, photo));
        // ToastAndroid.show('Success Change Photo', 1000);
      },
    );
  };

  const onLogout = () => {
    AsyncStorage.setItem('device_token', device_token);
    dispatch(AuthLogout(dataAuth, {device_token: 'empty'}));
    // dispatch(AuthLogout());
  };

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <RectButton
          style={{
            height: 28,
            width: 28,
            marginLeft: 20,
            marginTop: 30,
          }}
          onPress={() => navigation.navigate('Dashboard')}>
          <Image source={require('../../icons/arrow-left-black.png')} />
        </RectButton>
        <RectButton
          style={{alignSelf: 'center', width: 80, height: 80, borderRadius: 10}}
          onPress={() => sheetRef.current.snapTo(0)}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
            }}
            source={{
              uri: `${BASE_URL}/images/${photo}`,
            }}
          />
        </RectButton>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '400',
            marginTop: 10,
            marginBottom: 10,
            color: '#7A7886',
          }}>
          <Image
            style={{height: 15, width: 15}}
            source={require('../../icons/edit-2.png')}
          />
          Edit
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '700',
            color: '#514F5B',
            marginBottom: 5,
          }}>
          {name}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '400',
            marginBottom: 30,
            color: '#7A7886',
          }}>
          +62{phone}
        </Text>
        <RectButton
          style={styles.menu}
          onPress={() => navigation.navigate('PersonalInformation')}>
          <View
            style={{
              flexDirection: 'row',
              height: 58,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#4D4B57',
              }}>
              Personal Information
            </Text>
            <Image
              style={{
                height: 28,
                width: 28,
              }}
              source={require('../../icons/arrow-right.png')}
            />
          </View>
        </RectButton>
        <RectButton
          style={styles.menu}
          onPress={() => navigation.navigate('ChangePassword')}>
          <View
            style={{
              flexDirection: 'row',
              height: 58,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#4D4B57',
              }}>
              Change Password
            </Text>
            <Image
              style={{
                height: 28,
                width: 28,
              }}
              source={require('../../icons/arrow-right.png')}
            />
          </View>
        </RectButton>
        <RectButton
          style={styles.menu}
          onPress={() => navigation.navigate('ChangePin')}>
          <View
            style={{
              flexDirection: 'row',
              height: 58,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#4D4B57',
              }}>
              Change PIN
            </Text>
            <Image
              style={{
                height: 28,
                width: 28,
              }}
              source={require('../../icons/arrow-right.png')}
            />
          </View>
        </RectButton>
        <View style={styles.menu}>
          <View
            style={{
              flexDirection: 'row',
              height: 58,
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#4D4B57',
              }}>
              Notification
            </Text>
          </View>
        </View>
        <RectButton style={styles.menu} onPress={onLogout}>
          <View
            style={{
              flexDirection: 'row',
              height: 58,
              marginHorizontal: 20,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#FF5B37',
                alignSelf: 'center',
              }}>
              Logout
            </Text>
          </View>
        </RectButton>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[290, 0]}
        initialSnap={1}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  nominal: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  menu: {
    borderRadius: 10,
    backgroundColor: '#E5E8ED',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  header: {
    backgroundColor: '#FAFCFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FAFCFF',
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#E5E8ED',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
