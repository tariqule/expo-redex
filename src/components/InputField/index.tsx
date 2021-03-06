import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";

//Dumb component
const OrrinInputField = (props: any) => {
  return (
    <Input
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={(text: string) => props.onChangeText(text)}
      containerStyle={{ borderRadius: 5, width: "300px" }}
    />
  );
};

export default OrrinInputField;
