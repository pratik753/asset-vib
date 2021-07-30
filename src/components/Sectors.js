import "../style/style.css";
import Card from "./Card";
import { useRef } from "react";
// import { Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sector = () => {
  const [realRS, setRealRS] = useState(0);
  const [artsRS, setartsRS] = useState(0);
  const [equtiyRS, setequtiyRS] = useState(0);
  const [datRS, setdatRS] = useState(0);
  const [naRS, setnaRS] = useState(0);

  const realEstatevalue = useRef();
  const userAmount = useRef();

  const artsvalue = useRef();
  const equityvalue = useRef();
  const datvalue = useRef();
  const na = useRef();

  const checkthefield = () => {
    let entereduseramount = parseInt(userAmount.current.value);
    let enteredrealEstate = parseInt(realEstatevalue.current.value);
    let enteredarts = parseInt(artsvalue.current.value);
    let enteredequity = parseInt(equityvalue.current.value);
    let entereddat = parseInt(datvalue.current.value);
    let enteredna = parseInt(na.current.value);
    let sum = 0;

    if (enteredrealEstate.length == 0) {
      enteredrealEstate = 0;
    }
    if (enteredarts.length == 0) {
      enteredarts = 0;
    }
    if (enteredequity.length == 0) {
      enteredequity = 0;
    }
    if (entereddat.length == 0) {
      entereddat = 0;
    }
    if (enteredna.length == 0) {
      enteredna = 0;
    }
    sum =
      +enteredrealEstate +
      +enteredarts +
      +enteredequity +
      +entereddat +
      +enteredna;
    if (sum > 100) {
      alert("more then 100");
      na.current.value = 0;
    }
    console.log(sum);

    console.log((enteredrealEstate / 100) * entereduseramount);

    setRealRS((enteredrealEstate / 100) * entereduseramount);

    setartsRS((enteredarts / 100) * entereduseramount);
    setequtiyRS((enteredequity / 100) * entereduseramount);
    setdatRS((entereddat / 100) * entereduseramount);
    setnaRS((enteredna / 100) * entereduseramount);
  };

  return (
    <>
      <div className="rapinCont">
        <label className="head" style={{ fontSize: "1.5rem" }}>
          Name
        </label>

        <input type="text" className="head" />

        <label className="head" style={{ fontSize: "1.5rem" }}>
          Amount
        </label>
        <input type="number" className="head" ref={userAmount} />
      </div>
      <br />
      <Card>
        <table className="maintable">
          <tr>
            <td>
              <NavLink to="/realestate">RealEstate</NavLink>
            </td>
            <td>
              <NavLink to="/arts">Arts</NavLink>
            </td>
            <td>
              <NavLink to="/equity">Equity</NavLink>
            </td>
            <td>
              <NavLink to="/Debt">Debt</NavLink>
            </td>
            <td>
              <NavLink to="/commodity">Commodity</NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <input type="number" ref={realEstatevalue} required />
            </td>
            <td>
              <input type="number" ref={artsvalue} required />
            </td>
            <td>
              <input type="number" ref={equityvalue} required />
            </td>
            <td>
              <input type="number" ref={datvalue} required />
            </td>
            <td>
              <input type="number" ref={na} onChange={checkthefield} required />
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "2rem", fontWeight: "bold" }}>{realRS}</td>

            <td style={{ fontSize: "2rem", fontWeight: "bold" }}>{artsRS}</td>
            <td style={{ fontSize: "2rem", fontWeight: "bold" }}>{equtiyRS}</td>
            <td style={{ fontSize: "2rem", fontWeight: "bold" }}>{datRS}</td>
            <td style={{ fontSize: "2rem", fontWeight: "bold" }}>{naRS}</td>
          </tr>
        </table>
      </Card>
    </>
  );
};
export default Sector;
