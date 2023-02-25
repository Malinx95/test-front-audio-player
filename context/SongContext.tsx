import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Song } from "@/utils/types";

const SongContext = createContext<{
  currentSong: Song | null;
  setCurrentSong: React.Dispatch<SetStateAction<Song | null>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
}>({
  currentSong: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentSong: () => {},
  isPlaying: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsPlaying: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function SongContextWrapper({ children }: Props) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <SongContext.Provider
      value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}
    >
      {children}
    </SongContext.Provider>
  );
}

export function useCurrentSong() {
  return useContext(SongContext);
}
