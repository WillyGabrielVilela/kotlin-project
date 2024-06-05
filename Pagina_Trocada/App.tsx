import { ThemeProvider } from 'styled-components/native';
import { SignIn } from './src/screens/SignIn';
import theme from './src/theme';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold})

  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle="dark-content" 
      backgroundColor="transparent" 
      translucent 
      />
      <SignIn />

    </ThemeProvider>
  );
}


