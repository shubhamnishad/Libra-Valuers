import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';

import MainNavigator from './src/MainNavigator/MainNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
