import { useState } from "react";
import { ReactDOM } from "react";
import Elem from "../components/Elem";
import TicTacToeModel from "../model/TicTacToeModel";
import "./styles/tictactoe.css";

const tttModel = new TicTacToeModel();
export default function TicTacToe(props) {
  const [list, setList] = useState([...tttModel.getList()]);
  const [szam, setSzam] = useState(1);
  const [aktJatekos, setKovJatekos] = useState(tttModel.getKov());

  function kattintas(id) {
    tttModel.setAllapot(id);
    setList([...tttModel.getList()]);
    setKovJatekos(tttModel.getKov());
  }

  return (
    <div className="jatek">
      <h2> Tic-Tac-Toe</h2>
      <div className="jatekter">
        {list.map((elem, index) => {
          return (
            <Elem
              kattintas={kattintas}
              ertek={elem}
              key={index}
              index={index}
            ></Elem>
          );
        })}
      </div>
      <div className="allas">
        <p>A következő játékos: {aktJatekos}</p>
      </div>
    </div>
  );
}
