import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    fetch("AllPlayers.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      {console.log(players)}
      <Player></Player>
    </div>
  );
};

export default Players;
