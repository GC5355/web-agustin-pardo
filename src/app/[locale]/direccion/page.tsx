'use client'

import React, { useRef, useState, useEffect } from "react";
import Player from "@/components/Player/Player";

interface Song {
  title: string;
  url: string;
  progress: number;
  length: number;
}

const songsdata: Song[] = [
  {
    title: "Zita",
    url: "https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3",
    progress: 0,
    length: 0,
  },
  {
    title: "Zita",
    url: "https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3",
    progress: 0,
    length: 0,
  },
];

const Direccion: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>(songsdata[1]);

  const audioElem = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isplaying) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    if (audioElem.current) {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;

      setCurrentSong({
        ...currentSong,
        progress: (ct / duration) * 100,
        length: duration,
      });
    }
  };

  return (
    <div className="w-6/12 h-screen">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player
        songs={songs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default Direccion;
