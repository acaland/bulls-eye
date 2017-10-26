import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Modal,
  WebView,
  Platform
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import AboutView from "./components/AboutView";
import Button from "./components/Button";
import CustomSlider from "./components/CustomSlider";
import SmallBtn from "./components/SmallButton";
import LabelWithNumber from "./components/LabelWithNumber";

export default class App extends React.Component {
  state = {
    counter: 50,
    totalScore: 0,
    round: 0,
    targetValue: Math.floor(Math.random() * 100),
    showRules: false
  };

  showAlert = () => {
    const difference = Math.abs(this.state.counter - this.state.targetValue);
    const score = 100 - difference;
    this.setState({ totalScore: this.state.totalScore + score });
    var title = "Not even close";
    if (difference == 0) {
      title = "Perfect!";
    } else if (difference < 5) {
      title = "You almost had it!";
    } else if (difference < 10) {
      title = "Pretty good!";
    }
    const message = `You scored ${score} points`;
    Alert.alert(title, message, [
      { text: "OK", style: "default", onPress: this.startNewRound }
    ]);
  };

  startNewRound = () => {
    this.setState({
      round: this.state.round + 1,
      targetValue: Math.floor(Math.random() * 100),
      counter: 50
    });
  };

  reset = () =>
    this.setState({
      counter: 50,
      totalScore: 0,
      round: 0,
      targetValue: Math.floor(Math.random() * 100)
    });

  startOver = () =>
    Alert.alert("Start Over", "Are you sure?", [
      { text: "OK", style: "destructive", onPress: this.reset },
      { text: "Cancel", style: "cancel" }
    ]);

  render = () => (
    <ImageBackground style={styles.container} source={require("./assets/Background.png")}>
      <LabelWithNumber
        style={{ marginTop: 10 }}
        text="Put the Bull's Eye as close as you can to:"
        number={this.state.targetValue}
      />
      <CustomSlider
        minValue={1}
        maxValue={100}
        initialValue={this.state.counter}
        onSlidingComplete={value => this.setState({ counter: value })}
      />
      <Button style={{ top: -25 }} title="Hit me!" onPress={this.showAlert} />
      <View style={styles.bottomView}>
        <SmallBtn
          onPress={this.startOver}
          iconImage={require("./assets/StartOverIcon.png")}
        />
        <LabelWithNumber text="Score:" number={this.state.totalScore} />
        <LabelWithNumber text="Round:" number={this.state.round} />
        <SmallBtn
          onPress={() => this.setState({ showRules: true })}
          iconImage={require("./assets/InfoButton.png")}
        />
      </View>
      <AboutView
        visible={this.state.showRules}
        onClose={() => this.setState({ showRules: false })}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
    width: null, height: null
  },
  bottomView: {
    marginBottom: 10,
    flexDirection: "row",
    borderColor: "red",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%"
  }
});
