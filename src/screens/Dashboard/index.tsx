import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import OrrinInputField from "../../components/InputField";
import { selectLoginUser } from "../../redux/slices/login";
import { logOut } from "../../storage";

const DashboardScreen = (props: any) => {
  const [email, setEmail] = React.useState<any>("");
  const { data } = useSelector(selectLoginUser);
  const findEmailFromAsyncStore = () => {
    AsyncStorage.getItem("email")
      .then((value) => setEmail(value))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    // findEmailFromAsyncStore();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>dashboard</Text>
      <Text>{data?.email || email}</Text>
      <Text>{data?.password || ""}</Text>
      <OrrinInputField
        value={data?.email}
        placeholder="email"
        onChangeText={(value: string) => setEmail(value)}
      />
      <OrrinInputField
        value={data?.password || "NO DATA FOUND!"}
        placeholder="password"
      />

      <Button
        title="Logout "
        onPress={() => {
          logOut(props);
        }}
      ></Button>
    </View>
  );
};

export default DashboardScreen;
