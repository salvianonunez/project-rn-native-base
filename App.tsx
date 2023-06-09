/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NativeBaseProvider } from 'native-base';
import React from 'react';

import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CountScreen from './src/screens/CountScreen';
import SelectExample from './src/screens/SelectExample';
import FormularioExample from './src/screens/FormularioExample';
import LoginExample from './src/screens/LoginExample';
import FormControlExample from './src/screens/FormControlExample';
import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // return (
  //   <NativeBaseProvider>
  //     <SafeAreaView style={backgroundStyle}>
  //       {/* <CountScreen/>
  //       <SelectExample/> */}
  //       {/* <LoginExample/> */}
  //       {/* <FormularioExample/> */}
  //       <FormControlExample/>
  //     </SafeAreaView>
  //   </NativeBaseProvider>
  // );

  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}

export default App;
