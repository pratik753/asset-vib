// const [dis, setdis] = useState("");
// let dis = ` <input className="mylabel redcolor" type="text" disabled />`;
// let changetickcolor = "redcolor tick";
import { useState } from "react";
import done from "../images/done_black_24dp.svg";
const Sc = () => {
  const [change1, setChange1] = useState(false);
  const [changetickcolor1, setchangetickcolor1] = useState("redcolor tick");
  const disableinput1 = () => {
    if (change1 == true) {
      setchangetickcolor1("redcolor tick");
      setChange1(false);
    } else {
      setchangetickcolor1("tick");
      setChange1(true);
    }
  };
  const [change2, setChange2] = useState(false);
  const [changetickcolor2, setchangetickcolor2] = useState("redcolor tick");
  const disableinput2 = () => {
    if (change2 == true) {
      setchangetickcolor2("redcolor tick");
      setChange2(false);
    } else {
      setchangetickcolor2("tick");
      setChange2(true);
    }
  };
  // ///////////////
  const [change3, setChange3] = useState(false);
  const [changetickcolor3, setchangetickcolor3] = useState("redcolor tick");
  const disableinput3 = () => {
    if (change3 == true) {
      setchangetickcolor3("redcolor tick");
      setChange3(false);
    } else {
      setchangetickcolor3("tick");
      setChange3(true);
    }
  };
  // ///////////////
  const [change4, setChange4] = useState(false);
  const [changetickcolor4, setchangetickcolor4] = useState("redcolor tick");
  const disableinput4 = () => {
    if (change4 == true) {
      setchangetickcolor4("redcolor tick");
      setChange4(false);
    } else {
      setchangetickcolor4("tick");
      setChange4(true);
    }
  };
  // ///////////////
  const [change5, setChange5] = useState(false);
  const [changetickcolor5, setchangetickcolor5] = useState("redcolor tick");
  const disableinput5 = () => {
    if (change5 == true) {
      setchangetickcolor5("redcolor tick");
      setChange5(false);
    } else {
      setchangetickcolor5("tick");
      setChange5(true);
    }
  };
  // ///////////////
  const [change6, setChange6] = useState(false);
  const [changetickcolor6, setchangetickcolor6] = useState("redcolor tick");
  const disableinput6 = () => {
    if (change6 == true) {
      setchangetickcolor6("redcolor tick");
      setChange6(false);
    } else {
      setchangetickcolor6("tick");
      setChange6(true);
    }
  };
  // ///////////////
  const [change7, setChange7] = useState(false);
  const [changetickcolor7, setchangetickcolor7] = useState("redcolor tick");
  const disableinput7 = () => {
    if (change7 == true) {
      setchangetickcolor7("redcolor tick");
      setChange7(false);
    } else {
      setchangetickcolor7("tick");
      setChange7(true);
    }
  };
  // ///////////////
  const [change8, setChange8] = useState(false);
  const [changetickcolor8, setchangetickcolor8] = useState("redcolor tick");
  const disableinput8 = () => {
    if (change8 == true) {
      setchangetickcolor8("redcolor tick");
      setChange8(false);
    } else {
      setchangetickcolor8("tick");
      setChange8(true);
    }
  };
  // ///////////////
  const [change9, setChange9] = useState(false);
  const [changetickcolor9, setchangetickcolor9] = useState("redcolor tick");
  const disableinput9 = () => {
    if (change9 == true) {
      setchangetickcolor9("redcolor tick");
      setChange9(false);
    } else {
      setchangetickcolor9("tick");
      setChange9(true);
    }
  };
  // ///////////////
  const [change10, setChange10] = useState(false);
  const [changetickcolor10, setchangetickcolor10] = useState("redcolor tick");
  const disableinput10 = () => {
    if (change10 == true) {
      setchangetickcolor10("redcolor tick");
      setChange10(false);
    } else {
      setchangetickcolor10("tick");
      setChange10(true);
    }
  };
  // ///////////////
  const [change11, setChange11] = useState(false);
  const [changetickcolor11, setchangetickcolor11] = useState("redcolor tick");
  const disableinput11 = () => {
    if (change11 == true) {
      setchangetickcolor11("redcolor tick");
      setChange11(false);
    } else {
      setchangetickcolor11("tick");
      setChange11(true);
    }
  };
  // ///////////////
  const [change12, setChange12] = useState(false);
  const [changetickcolor12, setchangetickcolor12] = useState("redcolor tick");
  const disableinput12 = () => {
    if (change12 == true) {
      setchangetickcolor12("redcolor tick");
      setChange12(false);
    } else {
      setchangetickcolor12("tick");
      setChange12(true);
    }
  };

  return (
    <>
      <h1>Sc</h1>
      <div className="cont">
        <h2>
          <label id="auto">Auto</label>
        </h2>
      </div>
      <div className="cont">
        <label>Amara Raja Batteries Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor1} onClick={disableinput1}>
            {change1 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change1 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>

      <div className="cont">
        <label>Auto Pins (India) Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor2} onClick={disableinput2}>
            {change2 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change2 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      {/* /// */}
      <div className="cont">
        <label>Automobile Corporation of Goa Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor3} onClick={disableinput3}>
            {change3 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change3 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      {/* ///////////////////////// */}
      <div className="cont">
        <h2>
          <label id="banking">Banking</label>
        </h2>
      </div>
      <div className="cont">
        <label>Indian Bank</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor4} onClick={disableinput4}>
            {change4 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change4 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>

      <div className="cont">
        <label>Indian Overseas Bank</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor5} onClick={disableinput5}>
            {change5 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change5 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      {/* /// */}
      <div className="cont">
        <label>IndusInd Bank Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor6} onClick={disableinput6}>
            {change6 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change6 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      {/* ///////////////////////// */}
      <div className="cont">
        <h2>
          <label>Pharma</label>
        </h2>
      </div>
      <div className="cont">
        <label>ABL Biotechnologies Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor7} onClick={disableinput7}>
            {change7 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change7 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>

      <div className="cont">
        <label>Aayush Food & Herbs Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor8} onClick={disableinput8}>
            {change8 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change8 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      {/* /// */}
      <div className="cont">
        <label>Aarti Drugs Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor9} onClick={disableinput9}>
            {change9 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change9 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      {/* ///////////////////////// */}
      <div className="cont">
        <h2>
          <label id="oil">Oil</label>
        </h2>
      </div>
      <div className="cont">
        <label>Aban Offshore Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor10} onClick={disableinput10}>
            {change10 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change10 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>

      <div className="cont">
        <label>Asian Energy Services Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor11} onClick={disableinput11}>
            {change11 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change11 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      {/* /// */}
      <div className="cont">
        <label>Assam Petrochemicals Ltd.</label>
        <span class="material-icons-outlined">
          <button className={changetickcolor12} onClick={disableinput12}>
            {change12 && <img src={done} alt="React Logo" />}
          </button>
        </span>
        {change12 && (
          <>
            <input className="mylabel" type="text" /> <label>(% Risk)</label>
            <input className="mylabel" type="text" /> <label>(in Rs)</label>
          </>
        )}
      </div>
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
    </>
  );
};
export default Sc;
