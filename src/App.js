import Sector from "./components/Sectors";
import "./App.css";
import Lc from "./pages/Lc";
import Mc from "./pages/Mc";
import Sc from "./pages/Sc";
import MainNav from "../src/navbar/MainNavigation";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import RealEstate from "./pages/RealEstate";
import Arts from "./pages/Arts";
import Equity from "./pages/Equity";
import Debt from "./pages/Debt";
import { useState } from "react";
import Commodity from "./pages/Commodity";
var flag = 0;
var flag1 = 0;
function App() {
  const [temp, setTemp] = useState(true);
  const [other, setother] = useState(true);
  // if (flag == 0) {
  // if (flag == 0) {
  //   flag = 1;
  //   setTemp(false);
  // }
  const Sectorrem = () => {
    flag = 1;
    setTemp(false);
    console.log("hii");
  };
  function f1() {
    flag = 1;
    setTemp(false);
    console.log("hello");
  }
  function f2() {
    flag1 = 1;
    setTemp(true);
    console.log("bye");
  }
  function f3(val) {
    console.log(val);
    setother(val);
  }
  return (
    <div className="App">
      {/* <img src={logo} alt="Logo" /> */}
      <MainNav />
      {/* {other && <Sector />} */}
      {<Sector />}

      <Route path="/" exact>
        Home
      </Route>
      <Route path="/realestate" exact>
        {flag == 0 && f1()}
        {/* toggle */}
        {/* <button id="buttonto" onClick={Sectorrem}></button> */}
        {/* {document.getElementById("buttonto").click()} */}
        <RealEstate onEvent={f3} />
      </Route>
      <Route path="/arts" exact>
        {flag == 0 && f2()}
        <Arts />
      </Route>
      <Route path="/equity" exact>
        <Equity />
      </Route>
      <Route path="/Debt" exact>
        <Debt />
      </Route>
      <Route path="/lc" exact>
        <Lc />
      </Route>
      <Route path="/mc" exact>
        <Mc />
      </Route>
      <Route path="/sc" exact>
        <Sc />
      </Route>
      <Route path="/commodity" exact>
        <Commodity />
      </Route>
    </div>
  );
}

export default App;
