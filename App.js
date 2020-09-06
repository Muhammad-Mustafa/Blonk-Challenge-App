import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/index';

import AppContainer from './src/navigation/Navigation';
import Splash from './src/screens/Splash';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 5000);
  });

  const [state, setState] = useState(false);

  if (state == false) {
    return <Splash />;
  } else {
    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </SafeAreaView>
      </>
    );
  }
};

export default App;
