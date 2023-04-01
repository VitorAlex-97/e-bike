import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/styles/theme';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex='1' bg={theme.colors.primary[100]}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}