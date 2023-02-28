import { useEffect, useRef, useState } from "react";
import { useCurrentSong } from "@/context/SongContext";

function SongPlayer() {
  const { currentSong, isPlaying, setIsPlaying } = useCurrentSong();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setCurrentTime(0);
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong, setIsPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // write a function to convert seconds to minutes and seconds
  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return (
    <div className="w-screen h-52 fixed bottom-0 bg-gray-600 p-5 rounded-t-2xl">
      <audio
        ref={audioRef}
        src={currentSong?.audioURL}
        onLoadedMetadata={() => {
          setDuration(audioRef.current?.duration || 0);
        }}
        onTimeUpdate={() => {
          setCurrentTime(audioRef.current?.currentTime || 0);
        }}
      />
      <div className="px-3 flex flex-col text-white">
        <h2 className="text-lg leading-6 font-bold">
          {currentSong?.title ?? "Choose a song to play"}
        </h2>
        <h3 className="mt-1">{currentSong?.artist ?? "No song selected"}</h3>
      </div>
      <input
        type="range"
        defaultValue={0}
        value={Math.floor(currentTime)}
        min={0}
        max={Math.floor(duration)}
        onChange={(e) => {
          if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
          }
        }}
        className="w-full"
      />
      <div className="flex items-center justify-between w-full">
        <span>{formatTime(currentTime)}</span>
        <button
          className="bg-white rounded-full w-20 h-20 mr-8 hover:bg-purple-100"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          <span className="text-purple-600 font-bold tracking-tighter">
            {isPlaying ? "PAUSE" : "PLAY"}
          </span>
        </button>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default SongPlayer;
