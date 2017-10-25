import React from "react";
import {
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  Platform
} from "react-native";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  state = {
    isButtonHighlighted: false
  };

  toggleStatus = () =>
    this.setState({ isButtonHighlighted: !this.state.isButtonHighlighted });

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        onPressIn={this.toggleStatus}
        onPressOut={this.toggleStatus}
      >
        <Image
          style={[styles.hitMeBtnWrapper, this.props.style]}
          source={
            this.state.isButtonHighlighted
              ? require("../assets/Button-Normal.png")
              : require("../assets/Button-Highlighted.png")
          }
        >
          <Text style={styles.hitMeBtn}>{this.props.title}</Text>
        </Image>
      </TouchableWithoutFeedback>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  style: Image.propTypes.style
}

const styles = StyleSheet.create({
  hitMeBtnWrapper: {
    width: 100,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  hitMeBtn: {
    fontFamily: Platform.OS == "ios" ? "Arial Rounded MT Bold" : "Roboto",
    fontSize: 20,
    color: "rgb(96, 30, 0)",
    backgroundColor: "transparent",
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: 0, height: 1 }
  }
});
