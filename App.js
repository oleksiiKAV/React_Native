import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/login/RegistrationScreen';
import { LoginScreen } from './Screens/login/LoginScreen';
import { Home } from './Screens/home/Home';
import { useState } from 'react';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/ttf/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/ttf/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  const isLogIn = () => {
    if (!isLogin) {
      return (
        <>
          <MainStack.Screen
            name="RegistrationScreen"
            options={{ headerShown: false }}
          >
            {({ navigation }) => (
              <RegistrationScreen
                navigation={navigation}
                setIsLogin={setIsLogin}
              />
            )}
          </MainStack.Screen>
          <MainStack.Screen name="LoginScreen" options={{ headerShown: false }}>
            {({ navigation }) => (
              <LoginScreen navigation={navigation} setIsLogin={setIsLogin} />
            )}
          </MainStack.Screen>
        </>
      );
    }
    return (
      <MainStack.Screen name="HomeScreen" options={{ headerShown: false }}>
        {({ navigation }) => (
          <Home navigation={navigation} setIsLogin={setIsLogin} />
        )}
      </MainStack.Screen>
    );
  };

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="LoginScreen">
          {/* <MainStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <MainStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />  */}
          {/* <MainStack.Screen
            name="HomeScreen"
            component={Home}
            options={{ headerShown: false }}
          /> */}
          {isLogIn()}
        </MainStack.Navigator>        
      </NavigationContainer>
    </>
  );
}
