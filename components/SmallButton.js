import React from "react";
import { TouchableOpacity, Image } from "react-native";


const SmallButton = ({ iconImage, onPress }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    <Image style={styles.btn} source={require("../assets/SmallButton.png")}>
      <Image source={iconImage} />
    </Image>
    {/* <Ionicons
    name="ios-information-circle-outline"
    size={32}
    color="#157efb"
  /> */}
  </TouchableOpacity>
);

const styles = {
  btn: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default SmallButton;
