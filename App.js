import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import CameraScreen from "./Screens/CameraScreen";
import ImageGalleryScreen from "./Screens/ImageGalleryScreen";

export default function App() {
  let containScreen;
  const [pageName, setPageName] = useState("");

  if (pageName === "CameraPage") {
    containScreen = <CameraScreen />;
  } else if (pageName === "GalleryPage") {
    containScreen = <ImageGalleryScreen />;
  } else {
    containScreen = (
      <View style={styles.container}>
        <Button title="Camera" onPress={() => LoadPage("CameraPage")} />
        <Button title="Image gallery" onPress={() => LoadPage("GalleryPage")} />
      </View>
    );
  }

  LoadPage = (pagename) => {
    if (pagename === "CameraPage") {
      setPageName("CameraPage");
    } else {
      setPageName("GalleryPage");
    }
  };

  
  return containScreen;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
