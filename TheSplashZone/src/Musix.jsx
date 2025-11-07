import { useRef, useState, useEffect } from "react";

function KawaiiAudioPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = volume;
      audio.play();
      setIsPlaying(true);
    }
  };

  // ✅ Update slider as the song plays
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  // ✅ User dragged the seek bar
  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const handleVolume = (e) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    audioRef.current.volume = newVol;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
      <audio ref={audioRef} src="/musix.mp3" loop/>

      {/* ✅ Play / Pause */}
      <button onClick={togglePlay}>
        {isPlaying ? "⏸ Pause" : "▶️ Play"}
      </button>

      {/* ✅ Seek Bar */}
      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        onChange={handleSeek}
        step="0.1"
      />

      {/* ✅ Time display (optional cute) */}
      <div style={{ fontSize: "0.8rem" }}>
        {Math.floor(progress)}s / {Math.floor(duration)}s
      </div>

      {/* ✅ Volume Slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
      />
    </div>
  );
}

export default KawaiiAudioPlayer;