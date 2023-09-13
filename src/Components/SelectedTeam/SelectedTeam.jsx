const SelectedTeam = ({ selectedPlayer }) => {
  console.log(selectedPlayer);

  let counter = 0;

  return (
    <div className="border-2 lg:order-2 col-span-6 mx-2 md:col-span-6 lg:col-span-2 border-green-500 my-10 lg:my-20 rounded-lg">
      <h1 className="text-center text-3xl font-bold bg-green-500 p-5 text-white">
        Selected Team
      </h1>

      <table className="table text-center  border-separate border-spacing-2 text-white font-bold ">
        <tbody>
            <tr className="bg-green-700">
                <td>S.No</td>
                <td>Name</td>
                <td>Salary</td>
            </tr>
          {selectedPlayer.map((ply, idx) => (
            <tr key={idx} className="bg-green-700 border-spacing-y-1.5">
                <td>{idx+1}</td>
              <td> {ply.full_name}</td>
              <td>{ply.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedTeam;
