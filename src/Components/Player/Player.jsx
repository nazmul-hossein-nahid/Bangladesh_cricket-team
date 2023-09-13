import PropTypes from "prop-types";
const Player = ({ player, setSelectedPlayer, selectedPlayer }) => {
  const handlSelected = (players) => {
    const isSelested = selectedPlayer.find(
      (player) => player.full_name == players.full_name
    );
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
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  setSelectedPlayer: PropTypes.func.isRequired,
  selectedPlayer: PropTypes.any.isRequired,
};

export default Player;
