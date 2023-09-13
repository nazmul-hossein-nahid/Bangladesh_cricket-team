import Cetagurise from "../Cetagurise/Cetagurise";
import Header from "../Header/Header";
import Players from "../Players/Players";
import SelectedTeam from "../SelectedTeam/SelectedTeam";
import {useState } from "react";
const Layout = () => {
  const [carentCetagoris, setCarentCetagoris] = useState('All');
  
  return (
    <>
      <header>
        <Header ></Header>
        <Cetagurise setCarentCetagoris={setCarentCetagoris}></Cetagurise>
      </header>
      <main className="grid grid-cols-6 gap-5">
        <Players carentCetagoris={carentCetagoris} ></Players>
        <SelectedTeam></SelectedTeam>
      </main>
    </>
  );
};

export default Layout;
