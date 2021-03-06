import React from "react";
import { View } from "react-native";
// import { Input } from "react-native-gesture-handler";
import { getItemFromAsyncStorage, storeInAsyncStorage } from "../../storage";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Text, Card } from "react-native-elements";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { loginSlice } from "../../redux/slices/login";

const SigninScreen = (props: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { navigation } = props;

  const dispatch = useDispatch();
  React.useEffect(() => {
    getItemFromAsyncStorage("email").then((ema) => {
      getItemFromAsyncStorage("password").then((pass) => {
        if (ema === "tariq@gmail.com" && pass === "pass") {
          navigation.navigate("DASHBOARDSCREEN");
        } else {
          alert("Invalid user");
        }
      });
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Card>
        <Card.Title>
          {" "}
          <Text h1>Sign In</Text>
        </Card.Title>

        <Input
          placeholder="Email"
          style={{ borderRadius: 10, margin: 10, padding: 4 }}
          onChangeText={(text: any) => {
            setEmail(text);
          }}
        ></Input>
        <Input
          placeholder="Password"
          style={{ borderRadius: 10, margin: 10, padding: 4 }}
          onChangeText={(text: any) => {
            setPassword(text);
          }}
        ></Input>

        <Button
          title="Submit"
          onPress={() => {
            //
            if (email === "tariq@gmail.com" && password === "pass") {
              // storeInAsyncStorage("email", email);
              // storeInAsyncStorage("password", password);
              dispatch(loginSlice.actions.storeUserState({ email, password }));
              navigation.navigate("DASHBOARDSCREEN");
            } else {
              alert("Invalid user");
            }
          }}
        ></Button>
      </Card>
    </View>
  );
};

export default SigninScreen;
