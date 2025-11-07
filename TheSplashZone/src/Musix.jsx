import { useRef, useState } from "react";

function KawaiiAudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

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

  const changeVolume = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {/* ✅ The Audio Element */}
      <audio
        ref={audioRef}
        src="/musix.mp3"    // change to your file path!
        type="audio/mpeg"
        loop
      />

      {/* ✅ Play / Pause */}
      <button onClick={togglePlay} style={{minWidth:"80px"}}>
        {isPlaying ? "⏸ Pause" : "▶️ Play"}
      </button>

      {/* ✅ Volume Slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={changeVolume}
      />
    </div>
  );
}

export default KawaiiAudioPlayer;