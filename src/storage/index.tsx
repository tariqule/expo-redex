import AsyncStorage from "@react-native-community/async-storage";

export const getItemFromAsyncStorage = (key: string) => {
  return AsyncStorage.getItem(key);
};

export const storeInAsyncStorage = (key: string, value: any) => {
  AsyncStorage.setItem(key, value);
};

export const logOut = (props: any) => {
  AsyncStorage.setItem("email", "");
  AsyncStorage.setItem("password", "");
  props.navigation.navigate("SIGNINSCREEN");
};
