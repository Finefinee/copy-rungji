import {useState} from "react";

function Body() {

  const [number, setNumber] = useState(0);

  const handleClickNumber = () => {
    setNumber(number + 1);
  }

  const num1 = 0;
  const str1 = "??";
  const bool1 = true; // 이건 표현 안된다

  return (
    <header>
      <h2>Body</h2>
      <h2>{num1}</h2>
      <h2>{str1}</h2>
      <h2>{bool1}</h2>
      <h2 onClick={handleClickNumber}>click me: {number}</h2>
    </header>
  );
}

export default Body;