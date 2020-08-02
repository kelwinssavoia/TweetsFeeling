import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Home} from './components/home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView>
        <Home></Home>
      </SafeAreaView>
    </>
  );
};

export default App;
