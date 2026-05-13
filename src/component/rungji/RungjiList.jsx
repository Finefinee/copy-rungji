import {useState} from "react";
import Rungji from "./Rungji";

function RungjiList() {

  const [rungjiList, setRungjiList] = useState([]);
  const [rungjiCount, setRungjiCount] = useState(0);

  const addRungji = () => {
    const max = 12;
    const number = Math.floor(Math.random() * max);
    setRungjiList([...rungjiList, {number: Number(number), id: Date.now()}]);
    setRungjiCount(rungjiCount + 1);
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", gap: "10px", position: "sticky", top: 0, zIndex: 1000, backgroundColor: "white", padding: "20px 0px", alignItems: "center"}}>
        <button onClick={addRungji} style={{width: "50px"}}>룽지 추가</button>
        <div>{rungjiCount}마리의 룽지 존재</div>
      </div>
      <div style={{display: "flex", flexWrap: "wrap", width: "100%", alignItems: "center"}}>
        {rungjiList.map((index) => (
          <Rungji key={index.id} number={index.number}/>
        ))}
      </div>
    </div>
  );
}

export default RungjiList;