import { View, Text, Platform } from "react-native";
import React from "react";

const LabelWithNumber = ({ text, number, style }) => (
  <View style={[styles.wrapper, style]}>
    <Text style={styles.textlabels}>{text}</Text>
    <Text style={[styles.textlabels, styles.number]}>{number}</Text>
  </View>
);

const styles = {
  wrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  textlabels: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, .5)",
    textShadowOffset: { width: 0, height: 1 },
    fontFamily: Platform.OS == "ios" ? "Arial Rounded MT Bold" : "normal"
  },
  number: { fontWeight: "bold", marginLeft: 20, fontSize: 20 }
};

export default LabelWithNumber;
