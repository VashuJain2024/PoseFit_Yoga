import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward } from "lucide-react";

const musicPlaylist = [
    { label: "No Music", file: "none" },
    { label: "Sorry Sorry", file: "sorry-sorry.mp3" },
];

function YogaWrapper() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const currentTrack = musicPlaylist[currentTrackIndex];

    useEffect(() => {
        const audio = audioRef.current;

        if (currentTrack.file === "none") {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
            return;
        }

        audio.src = currentTrack.file;
        audio.loop = true;
        audio.volume = 0.5;

        isPlaying ? audio.play() : audio.pause();

        return () => audio.pause();
    }, [currentTrack.file, isPlaying]);

    const togglePlay = () => {
        if (currentTrack.file !== "none") {
            setIsPlaying(!isPlaying);
        }
    };

    const playNext = () => {
        const nextIndex = (currentTrackIndex + 1) % musicPlaylist.length;
        setCurrentTrackIndex(nextIndex);
        setIsPlaying(true);
    };

    return (
        <div className="yoga-wrapper flex flex-col items-center justify-center min-h-screen">
            {/* 🎵 Music Player Controls at Top */}
            <div className="music-select p-3 max-w-md rounded-xl bg-white border space-y-3 m-3">
                <label className="text-black font-semibold text-lg">🎶 Select Music</label>

                <select
                    value={currentTrackIndex}
                    onChange={(e) => {
                        setCurrentTrackIndex(parseInt(e.target.value));
                        setIsPlaying(true);
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-gray-200 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    {musicPlaylist.map((track, index) => (
                        <option key={index} value={index}>
                            {track.label}
                        </option>
                    ))}
                </select>

                <div className="music-controls flex items-center justify-between gap-3 mt-3">
                    <button
                        onClick={togglePlay}
                        className="bg-white p-3 rounded-full shadow-md hover:bg-blue-100 transition duration-200"
                    >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    <button
                        onClick={playNext}
                        className="bg-white p-3 rounded-full shadow-md hover:bg-blue-100 transition duration-200"
                    >
                        <SkipForward size={18} />
                    </button>

                    <span className="text-sm text-gray-600 flex-1 text-right">
                        <span className="opacity-80">Now Playing:</span>{" "}
                        <strong className="text-blue-600">{currentTrack.label}</strong>
                    </span>
                </div>
            </div>

            <Outlet /> {/* This will render Yoga or YogaCanvas below */}

            {/* Hidden audio tag */}
            <audio ref={audioRef} />
        </div>
    );
}

export default YogaWrapper;
