"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  console.log("First", isVisible);
  useEffect(() => {
    setIsVisible(true);
    console.log("Inside Effect", isVisible);
  }, []);
  return (
    <div className={`w-3/4 h-screen m-auto content-center -mt-16 `}>
      <div
        className={`flex justify-center transition-opacity duration-700 delay-75 transform ease-in-out ${
          isVisible ? "opacity-100 " : "opacity-0"
        }`}
      >
        <p className="text-7xl">Hello, I am Bimal</p>
      </div>
      <div
        className={`flex justify-center mt-2 transition-opacity duration-700 delay-1000 transform ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-3xl">Welcome to my portfolio.</p>
      </div>
    </div>
  );
}
