import { useState } from "react";
import { useRef } from "react";
import "../style/style.css";
import { table } from "react-bootstrap";
let temp = 0;
temp++;
var flag = 0;
const RealEstate = (props) => {
  const temp = false;
  const [housingname, sethousingname] = useState();
  const housing = useRef();
  const housingfun = () => {
    sethousingname(housing.current.value);
    console.log(housingname);
    localStorage.setItem("house", housing.current.value);
    // temp = 2;
  };
  if (flag == 0) {
    props.onEvent(temp);
  }
  const funtest = () => {
    // const timer = setTimeout(() => {
    housing.current.value = localStorage.getItem("house");
    console.log("This will run after 1 second!");
    // }, 10000);
  };

  // if (temp == 2) {
  //   // document.getElementById("housinginp").value = localStorage.getItem("house");
  // }
  console.log("hii");
  // housingfun();
  return (
    <>
      <br />
      <h1 onMouseOver={funtest}>RealEstate</h1>
      {/* <a href="./Test">hii</a> */}
      <div className="cont">
        <label>Amount to be invested in Housing :</label>
        <input
          id="housinginp"
          className="mylabel"
          type="text"
          ref={housing}
          onBlur={housingfun}
          // onLoad={funtest}
        />
        <label>(in Rs)</label>
      </div>
      {/* <button onClick={funtest}>hii</button> */}
      <div className="cont">
        <label>Amount to be invested in Comm :</label>
        <input
          className="mylabel"
          type="text"
          // ref={housing}
          // placeholder={housingname}
          // onBlur={housingfun}
        />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <table className=" table table-striped table-hover ">
          <tr className="table-dark">
            <th className="table-dark userdark ">Name</th>
            <th className="table-dark userdark">Amount</th>
            <th className="table-dark userdark ">Risk %</th>
            <th className="table-dark userdark">P1</th>
            <th className="table-dark userdark">P2</th>
            <th className="table-dark userdark">P3</th>
          </tr>
          <tr>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" number "
                // style=" width: 70% ; "
                className=" form-control  "
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                ///style=" width: 70% ; "
                className=" form-control "
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                name=" "
                style={{ background: "white" }}
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control  "
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                style={{ background: "white" }}
                name=" "
              />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default RealEstate;
