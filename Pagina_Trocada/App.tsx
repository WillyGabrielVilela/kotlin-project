import { ThemeProvider } from 'styled-components/native';
import { SignIn } from './src/screens/SignIn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { AppProvider, UserProvider } from '@realm/react';
import { REALM_APP_ID } from '@env';


import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
   return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <AppProvider id={REALM_APP_ID}>
          <UserProvider fallback={SignIn}>
            <Routes />
          </UserProvider>
        </AppProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


