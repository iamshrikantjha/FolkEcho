// AudioPlayerContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Audio } from "expo-av";

// Define the shape of the context
interface AudioPlayerContextType {
  playAudio: (uri: string, id: string) => Promise<void>;
  pauseAudio: () => Promise<void>;
  stopAudio: () => Promise<void>;
  isLoading: boolean;
  isPlaying: boolean;
  activeSoundId: string | null;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

interface AudioPlayerProviderProps {
  children: ReactNode;
}

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({
  children,
}) => {
  const [activeSound, setActiveSound] = useState<Audio.Sound | null>(null);
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Stop and unload any currently active audio
  const stopAudio = async (): Promise<void> => {
    if (activeSound) {
      try {
        await activeSound.stopAsync();
        await activeSound.unloadAsync();
      } catch (error) {
        console.error("Error stopping audio:", error);
      } finally {
        setActiveSound(null);
        setActiveSoundId(null);
        setIsPlaying(false);
        setIsLoading(false);
      }
    }
  };

  const playAudio = async (uri: string, id: string): Promise<void> => {
    try {
      // If the currently active sound is the same, just toggle playback
      if (activeSoundId === id) {
        if (isPlaying) {
          await pauseAudio(); // Pause if it's already playing
        } else {
          await activeSound?.playAsync(); // Resume playing
          setIsPlaying(true);
        }
        return;
      }

      // Stop and unload the existing sound if playing a new one
      await stopAudio();
      setIsLoading(true);

      // Create and load the new sound instance, then play it
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      );

      setActiveSound(sound);
      setActiveSoundId(id);
      setIsLoading(false);
      setIsPlaying(true);

      // Handle playback status updates
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          stopAudio(); // Stop audio when playback ends
        } else if (status.isPlaying) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const pauseAudio = async (): Promise<void> => {
    if (activeSound && isPlaying) {
      await activeSound.pauseAsync();
      setIsPlaying(false);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        playAudio,
        pauseAudio,
        stopAudio,
        isLoading,
        isPlaying,
        activeSoundId,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
