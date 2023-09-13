import { useState } from "react";

const Player = ({ player, setSelectedPlayer, selectedPlayer }) => {
  const [selecte, setSelecte] = useState(false);
  // setSelecte(!selecte);
  const handlSelected = (players) => {
    const isSelested = selectedPlayer.find(
      (player) => player.full_name == players.full_name
    );
    console.log(isSelested);
    if (isSelested) {
      
      return alert("Already selected");
    } else {
      setSelectedPlayer([...selectedPlayer, players]);
    }
  };

  const { full_name, image_url, age, role, salary } = player;
  return (
    <div>
      {/* card */}
      <div className="card border border-green-500 shadow-xl">
        <figure>
          <img
            className="w-full border-b-8 border-green-500"
            src={image_url}
            alt=""
          />
        </figure>
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-2xl font-bold">{full_name}</h2>
            <p className="text-red-500">Age: {age}</p>
            <p>{role}</p>
            <p>Salary: {salary} Tk</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => handlSelected(player)}
              className="w-full bg-green-500 hover:bg-green-600 text-2xl py-2 rounded-md text-white font-semibold"
            >
              {selecte ? "Seleted" : " Select"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
