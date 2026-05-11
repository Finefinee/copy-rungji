import {useState} from "react";
import Rungji from "./Rungji";

function RungjiList() {

  const [rungjiList, setRungjiList] = useState([]);

  const addRungji = () => {
    const max = 12;
    const number = Math.floor(Math.random() * max);
    setRungjiList([...rungjiList, {number: Number(number), id: Date.now()}]);
  }

  return (
    <div>
      <button onClick={addRungji}>룽지 추가</button>
      <div style={{display: "flex", flexWrap: "wrap", width: "100%", alignItems: "center"}}>
        {rungjiList.map((index) => (
          <Rungji key={index.id} number={index.number}/>
        ))}
      </div>
    </div>
  );
}

export default RungjiList;