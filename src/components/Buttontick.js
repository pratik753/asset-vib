import { useState } from "react";

const Buttontick = () => {
  const [colorchange, setcolorchange] = useState("bgcolorgry");
  //   let colorchange = ;
  const changecolor = () => {
    if (colorchange === "bgcolorgry") {
      setcolorchange("bgcolorgreen");
    } else {
      setcolorchange("bgcolorgry");
    }
    console.log("hi");
  };
  return (
    <>
      <button onClick={changecolor} className={colorchange}>
        Tick
      </button>
    </>
  );
};
export default Buttontick;
