/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  configureFonts,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import AppNavigator from './src/navigators/AppNavigator';
import globalColors from './src/styles/colors';
import fontsConfig from './src/styles/font';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/store/store';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: globalColors.primary,
    secondary: globalColors.secondary,
  },
  fonts: configureFonts({config: fontsConfig}),
};

function App(): JSX.Element {
  return (
    //root navigation container
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
