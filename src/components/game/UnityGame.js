import React, { useEffect } from "react";

const UnityGame = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/pong2/Build/Pong WebGL.loader.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.UnityLoader !== "undefined") {
        window.UnityLoader.instantiate("unityContainer", "/pong/Build/Pong_WebGL.json", {
          onProgress: (instance, progress) => {
            console.log(`Loading: ${progress * 100}%`);
          },
        });
      } else {
        console.error("UnityLoader is not defined. Check if the loader script is loaded correctly.");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h3>Loading Unity game...</h3>
      <div id="unityContainer" style={{ width: "960px", height: "600px" }}></div>
    </div>
  );
};

export default UnityGame;