import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GetUsers} from '../redux/actions/Users';
import {useDispatch, useSelector} from 'react-redux';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import InputPin from '../screens/InputPin';
import InputPinSuccess from '../screens/InputPinSuccess';
import ForgotPassword from '../screens/ForgotPassword';
import ForgotPasswordInput from '../screens/ForgotPasswordInput';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import Profile from '../screens/Profile';
import PersonalInformation from '../screens/PersonalInformation';
import AddPhone from '../screens/AddPhone';
import ChangePassword from '../screens/ChangePassword';
import ChangePin from '../screens/ChangePin';
import NewPin from '../screens/NewPin';
import SearchReceiverTransfer from '../screens/SearchReceiverTransfer';
import InputAmount from '../screens/InputAmount';
import Confirmation from '../screens/Confirmation';
import InputPinTransfer from '../screens/InputPinTransfer';
import TransferSuccess from '../screens/TransferSuccess';
import Topup from '../screens/Topup';

import messaging from '@react-native-firebase/messaging';
import {Device} from '../redux/actions/Device';

const Stack = createStackNavigator();

export default Navigator = () => {
  const {isLogin, data} = useSelector((state) => state.Auth);

  const [initialRoute, setInitialRoute] = React.useState('Dashboard');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(initialRoute); // e.g. "Settings"
        }
        setLoading(false);
      });

    messaging()
      .getToken()
      .then((device_token) => {
        dispatch(Device(device_token));
      });
  }, []);

  const HomeStack = () => {
    if (loading) {
      return null;
    }
    return (
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPhone"
          component={AddPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPin"
          component={NewPin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchReceiverTransfer"
          component={SearchReceiverTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InputAmount"
          component={InputAmount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InputPinTransfer"
          component={InputPinTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Topup"
          component={Topup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const dispatch = useDispatch();
  dispatch(GetUsers(data));

  return (
    <>
      <NavigationContainer>
        {isLogin && data ? (
          <HomeStack />
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="InputPin"
              component={InputPin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="InputPinSuccess"
              component={InputPinSuccess}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPasswordInput"
              component={ForgotPasswordInput}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
