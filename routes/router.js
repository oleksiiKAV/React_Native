import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens/login/LoginScreen';
import { RegistrationScreen } from '../Screens/login/RegistrationScreen';
import { Home } from '../Screens/home/Home';

const MainStack = createStackNavigator();

export const router = (isLogin) => {
  if (!isLogin) {
    return (
      <>
        <MainStack.Screen
          name="RegistrationScreen"
          options={{ headerShown: false }}
        >
          {({ navigation }) => <RegistrationScreen navigation={navigation} />}
        </MainStack.Screen>
        <MainStack.Screen name="LoginScreen" options={{ headerShown: false }}>
          {({ navigation }) => <LoginScreen navigation={navigation} />}
        </MainStack.Screen>
      </>
    );
  }
  return (
    <MainStack.Screen name="HomeScreen" options={{ headerShown: false }}>
      {({ navigation }) => <Home navigation={navigation} />}
    </MainStack.Screen>
  );
};