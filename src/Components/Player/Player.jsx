const Player = ({ player, handlSelected }) => {
  // console.log(player);
  const {
    full_name,
    image_url,
    age,
    role,
    batting_style,
    bowling_style,
    career_avg_batting,
    career_avg_bowling,
    centuries,
    fifties,
    matches_played,
    runs_scored,
    wickets_taken,
    salary,
  } = player;
  return (
    <div>
      {/* card */}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {full_name} <sup className="text-red-500">{age}</sup>
            </h2>
            <p>{role}</p>
          </div>

          {/* deteils */}
          <div className="w-full">
            <table className="table">
              <tbody>
                <tr>
                  <td>Batting Style</td>
                  <td>{batting_style}</td>
                </tr>
                <tr>
                  <td>Bowling Style</td>
                  <td>{bowling_style}</td>
                </tr>
                <tr>
                  <td>Batting Avg</td>
                  <td>{career_avg_batting}</td>
                </tr>
                <tr>
                  <td>Bowling Avg</td>
                  <td>{career_avg_bowling}</td>
                </tr>
                <tr>
                  <td>Centuries</td>
                  <td>{centuries}</td>
                </tr>
                <tr>
                  <td>Fifties</td>
                  <td>{fifties}</td>
                </tr>
                <tr>
                  <td>Matches</td>
                  <td>{matches_played}</td>
                </tr>
                <tr>
                  <td>Total Runs</td>
                  <td>{runs_scored}</td>
                </tr>
                <tr>
                  <td>Wickets</td>
                  <td>{wickets_taken}</td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td>Tk. {salary}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <button
              onClick={() => handlSelected(player)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-2xl py-2 rounded-md text-white font-semibold"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
