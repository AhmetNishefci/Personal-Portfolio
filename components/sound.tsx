"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export const Sound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    if (audioRef.current) {
      newState ? audioRef.current.play() : audioRef.current.pause();
    }
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-[1000] group">
      <audio ref={audioRef} loop>
        <source src={"/audio/Birds.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-16 xs:h-16 rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 hover:bg-opacity-75 focus:outline-none"
        aria-label="Sound control button"
        name="Sound control button"
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-950 stroke-current"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-950 stroke-current"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};
