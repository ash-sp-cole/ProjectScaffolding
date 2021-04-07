import './App.css';
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";

import HomeMainDisplay from './Components/HomeMainDisplay';
import stepOne from "./Components/FormComponents/stepOne";
import stepTwo from "./Components/FormComponents/stepTwo";
import stepThree from "./Components/FormComponents/stepThree";
import MenuAppBar from './Components/HeaderAppBar';
import LoginLanding from './Components/LoginLanding';

function App() {
  return (
    <Router>
      <MenuAppBar/>
      <Switch>
        <Route exact path ="/" component={LoginLanding}/>
        <Route path ="/rangerHome" component={HomeMainDisplay}/>
        <Route path = "/step1" component= {stepOne}/>
        <Route path = "/step3" component= {stepTwo}/>
        <Route path = "/step3" component= {stepThree}/>
      </Switch>
    </Router>
  );
}
export default App;



