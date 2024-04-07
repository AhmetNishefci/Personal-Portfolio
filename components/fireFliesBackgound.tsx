"use client";

import React, { useEffect, useState } from "react";

type Firefly = {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
};

const createFirefly = (): Firefly => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

export const FireFliesBackground: React.FC = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      setFireflies((currentFireflies) => [
        ...currentFireflies.slice(-20),
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full w-[15px] h-[15px] dark:bg-firefly-radial-dark bg-firefly-radial-light"
          style={{
            top: firefly.top,
            left: firefly.left,
            animation: `move ${firefly.animationDuration} infinite alternate`,
          }}
        ></div>
      ))}
    </div>
  );
};
