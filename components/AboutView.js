import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Modal,
  WebView,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import Button from "./Button";

export default class AboutView extends React.Component {
  state = {
    isButtonHighlighted: false
  };
  render = () => (
    <Modal
      transparent={true}
      visible={this.props.visible}
      animationType="slide"
      supportedOrientations={["landscape"]}
      onRequestClose={this.props.onClose}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/Background.png")}
        >
          <View style={styles.webviewWrapper}>
            <WebView
              source={require("../assets/BullsEye.html")}
              scrollEnabled={false}
            />
          </View>

          <Button title="Close" onPress={this.props.onClose} />
        </ImageBackground>
      </View>
    </Modal>
  );
}

AboutView.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null, height: null,
    justifyContent: "space-around",
    alignItems: "center"
  },
  webviewWrapper: { width: "90%", height: "70%", marginTop: 20 }
});
