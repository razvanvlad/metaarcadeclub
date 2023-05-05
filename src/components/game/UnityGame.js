import React from "react";

const UnityGame = () => {
  return (
    <div>
      <h3>Loading Unity game...</h3>
      <iframe
        src="/game/game.html"
        width="1920"
        height="850"
        style={{ border: "none" }}
        title="Unity Game"
      ></iframe>
    </div>
  );
};

export default UnityGame;
