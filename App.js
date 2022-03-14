import React from 'react';
import { StatusBar, View, Text, StyleSheet, Button, LogBox, TouchableOpacity } from 'react-native'
import VideoPlayer from 'react-native-video'
import { YoutubePlayer } from 'react-native-video-extension';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      {/* <YoutubePlayer
        mode="auto-fit"
        source={{
          uri: 'https://www.youtube.com/embed/Q9GLCcJ27TA',
        }}
        https://www.youtube.com/embed/4U_sDSLe5yQ
      /> */}

      <View style={{ aspectRatio: 16 / 9 }}>
        <WebView
          containerStyle={{ flex: 1 }}
          source={{
            uri: 'https://www.youtube.com/embed/mK9J8ByjT4U'
          }}
          allowsFullscreenVideo
        />
      </View>
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
