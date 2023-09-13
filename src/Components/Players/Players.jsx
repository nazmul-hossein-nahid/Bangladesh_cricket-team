import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ carentCetagoris }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    fetch("AllPlayers.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  useEffect(() => {
    fetch("AllPlayers.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .then(() => {
        setPlayers((previousPlayers) => {
          if (carentCetagoris == "All") {
            return previousPlayers;
          }
          const filtared = previousPlayers.filter(
            (player) => player.role == carentCetagoris
          );
          return filtared;
        });
      });
  }, [carentCetagoris]);

  const handlSelected = (players) => {
    console.log(players)
    const isSelested = selectedPlayer.find((player) => {
      player.role == players.role;
    });
    console.log(isSelested);
    if (isSelested) {
      return alert("Already selected");
    } else {
      setSelectedPlayer(...selectedPlayer, players);
    }
  };

  return (
    <div className="grid order-2 lg:order-1 md:grid-cols-2 lg:grid-cols-3 col-span-6 lg:col-span-4 gap-5 lg:my-20 p-2">
      {players.map((player, id) => (
        <Player handlSelected={handlSelected} key={id} player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
