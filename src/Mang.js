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

function Mang() {
  let temp = true;
  return (
    <div className="App">
      {/* <img src={logo} alt="Logo" /> */}
      <MainNav />
      {temp && <Sector />}

      <Route path="/" exact>
        Home
      </Route>
      <Route path="/realestate" exact>
        <RealEstate />
      </Route>
      <Route path="/arts" exact>
        temp=false;
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
      <Route path="/NA" exact>
        NA
      </Route>
    </div>
  );
}

export default Mang;
