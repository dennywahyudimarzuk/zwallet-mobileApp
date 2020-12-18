import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigator';
import {Provider as ProviderRedux} from 'react-redux';
import {Provider} from 'react-native-paper';
import { store } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
// import configureStore from './src/redux/store';
// import {PersistGate} from 'redux-persist/integration/react';
// import {NativeAppEventEmitter} from 'react-native';


const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  // const {store, persistor} = configureStore();
  return (
    <ProviderRedux store={store}>
      <Provider>
        <Navigator />
      </Provider>
    </ProviderRedux>
  );
};

export default App;
