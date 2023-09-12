import { RegistrationScreen } from './Screens/login/RegistrationScreen';
import { LoginScreen } from './Screens/login/LoginScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      
    </>
  );
}
