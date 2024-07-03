import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Src/Navigation/AppNavigation';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import Store from "./Src/Redux/Store";
import { Provider, useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
