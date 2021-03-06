import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "./src/screens/Signin";
import DashboardScreen from "./src/screens/Dashboard";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { configureAppStore } from "./src/redux/store";
const Stack = createStackNavigator();

function App() {
  const [isReady, setIsReady] = React.useState(false);
  // const loadFonts = async () =>
  //   await Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     ...Ionicons.font,
  //   });
  // React.useEffect(() => {
  //   loadFonts();
  //   setIsReady(true);
  // }, []);
  const store = configureAppStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DASHBOARDSCREEN"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SIGNINSCREEN" component={SigninScreen} />
          <Stack.Screen name="DASHBOARDSCREEN" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
