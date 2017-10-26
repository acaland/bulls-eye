import React from "react";
import { Slider, View, Text, Platform, Image } from "react-native";
import PropTypes from "prop-types";

export default class CustomSlider extends React.Component {
  state = {
    isSliderHighlighted: false
  };
  toggleStatus = () => this.setState({ isSliderHighlighted: true })
  render() {
    // console.log("rendering Custom Slider");
    // console.log(JSON.stringify(require("../assets/SliderThumb-Highlighted.png")))
    // console.log(require("../assets/SliderThumb-Normal.png"));
    return (
      <View style={styles.sliderView}>
        <Text style={[styles.textlabels, styles.minMax, {textAlign: "right"}]}>
          {this.props.minValue}
        </Text>
        <Slider
          minimumValue={this.props.minValue}
          maximumValue={this.props.maxValue}
          minimumTrackImage={require("../assets/SliderTrackLeft2.png")}
          maximumTrackImage={require("../assets/SliderTrackRight2.png")}
          thumbImage={
            this.state.isSliderHighlighted
              ? require('../assets/SliderThumb-Highlighted.png')
              : require('../assets/SliderThumb-Normal.png')
          }
          onResponderGrant={this.toggleStatus}
          value={this.props.initialValue}
          onSlidingComplete={value => {
            this.setState({ isSliderHighlighted: false });
            this.props.onSlidingComplete(Math.floor(value));
          }}
          style={{ width: "80%", height: 40 }}
        />
        <Text style={[styles.textlabels, styles.minMax, {textAlign: "left"}]}>
          {this.props.maxValue}
        </Text>
      </View>
    );
  }
}

CustomSlider.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
  onSlidingComplete: PropTypes.func.isRequired
};

const styles = {
  sliderView: {
    flexDirection: "row",
    borderColor: "red",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around"
  },
  textlabels: {
    color: "white",
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, .5)",
    textShadowOffset: { width: 0, height: 1 },
    fontFamily: Platform.OS == "ios" ? "Arial Rounded MT Bold" : "normal",
  },

  minMax: { fontSize: 16, width: 55 }
};
