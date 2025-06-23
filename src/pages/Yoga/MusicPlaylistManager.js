import React, { useState } from "react";

function MusicPlaylistManager({ setPlaylist }) {
    const [dragActive, setDragActive] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const files = Array.from(e.dataTransfer.files).filter((file) =>
            file.type.includes("audio")
        );

        const newTracks = files.map((file) => ({
            label: file.name,
            file: URL.createObjectURL(file),
        }));

        const text = e.dataTransfer.getData("text/plain");

        if (text.includes("youtube.com") || text.includes("youtu.be")) {
            newTracks.push({
                label: "YouTube: " + text,
                file: text,
            });
        }

        if (newTracks.length > 0) {
            setPlaylist((prev) => [...prev, ...newTracks]);
        }
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            className={`w-full mt-3 p-4 text-center border-2 border-dashed rounded-lg transition-all ${dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
                }`}
        >
            <p className="text-sm text-gray-600">
                🎧 Drag & drop MP3/WAV files or paste YouTube links here
            </p>
        </div>
    );
}

export default MusicPlaylistManager;
