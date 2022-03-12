import React from 'react';
import { StatusBar, View, Text, StyleSheet, Button, LogBox, TouchableOpacity } from 'react-native'
import VideoPlayer from 'react-native-video'
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import { YoutubePlayer } from 'react-native-video-extension';

LogBox.ignoreLogs(["`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.", "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method."])

const App = () => {
  const [orientation, setOrientation] = React.useState(PORTRAIT);

  function handleClick() {
    setOrientation(prev => {
      if (prev === LANDSCAPE) {
        return PORTRAIT
      } else return LANDSCAPE
    })
    console.log("Click")
  }

  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      <YoutubePlayer
        mode="auto-fit"
        source={{
          uri: 'https://mschoolstatic.mobiedu.vn/site_184/video/ok5t35rhbcwe_1641522704.mp4',
        }}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    backgroundColor: "blue",
    padding: 20,
    zIndex: 1000
  }
});

export default App;
