import {Children, useState} from "react";

function Body({children}) {

  const [number, setNumber] = useState(0);

  const handleClickNumber = () => {
    setNumber(number + 1);
  }

  const num1 = 0;
  const str1 = "??";
  const bool1 = true; // 이건 표현 안된다

  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Body;