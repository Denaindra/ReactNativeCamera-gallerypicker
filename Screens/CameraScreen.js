import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { RNCamera } from "react-native-camera";

function CameraScreen(props) {
    console.log("camera page")
  const [camers, setCamera] = useState(0);

  if (!camers) {
    setCamera("front");
  }

  const SwitchcamType = () => {
    if (camers === "front") {
      setCamera("back");
    } else {
      setCamera("front");
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        type={camers}
        style={styles.camera}
        ref={(ref) => {
          this.camera = ref;
        }}
      />
      <Button
        title="camer view"
        style={styles.buttons}
        onPress={() => SwitchcamType()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    width: "100%",
    height: 50,
    backgroundColor: "green",
    alignItems: "center",
  },
});
export default CameraScreen;
