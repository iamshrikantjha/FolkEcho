import React from "react";
import { View, Button, Text } from "react-native";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { Button as PaperButton } from "react-native-paper";
interface AudioPlayerProps {
  uri: string;
  id: string;
  title?: string; // Optional title for the audio track
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ uri, id, title }) => {
  const { playAudio, pauseAudio, isLoading, isPlaying, activeSoundId } =
    useAudioPlayer();

  const handlePlayPause = async () => {
    if (activeSoundId === id && isPlaying) {
      await pauseAudio();
    } else {
      await playAudio(uri, id);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>{title || "Audio Player"}</Text>
      {isLoading && activeSoundId === id ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* <Button
            title={activeSoundId === id && isPlaying ? "Pause" : "Play"}
            onPress={handlePlayPause}
          /> */}
          <PaperButton
            icon={activeSoundId === id && isPlaying ? "pause" : "play"}
            loading={isLoading && activeSoundId === id}
            mode="contained"
            // onPress={() => console.log("Pressed")}
            onPress={handlePlayPause}
          >
            {activeSoundId === id && isPlaying ? "Pause" : "Play"}
          </PaperButton>
        </>
      )}
    </View>
  );
};

export default AudioPlayer;
