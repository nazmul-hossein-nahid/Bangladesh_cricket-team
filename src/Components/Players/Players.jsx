import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';

const Players = ({ carentCetagoris, selectedPlayer, setSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);
  

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

  

  return (
    <div className="grid  order-2 lg:order-1 md:grid-cols-2 lg:grid-cols-3 col-span-6 lg:col-span-4 gap-5 lg:my-20 p-2">
      {players.map((player, id) => (
        <Player
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
          key={id}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

Players.propTypes ={
  carentCetagoris: PropTypes.object.isRequired,
  selectedPlayer: PropTypes.object.isRequired,
  setSelectedPlayer: PropTypes.func.isRequired,
}

export default Players;
