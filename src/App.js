import './App.css';
import { Header } from './Comp/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Comp/Login';
import Signup from './Comp/Signup';
import Mybooking from './Comp/Mybooking';
import Home from './Comp/Home';
import Footer from './Comp/Footer';
import Flight from './Comp/Flight';
import Train from './Comp/Train';
import Print from './Comp/Print';
import Cab from './Comp/Cab';

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/signup"><Signup /></Route>
        <Route exact path="/Mybooking"><Mybooking /></Route>
        <Route exact path="/Flight"><Flight /></Route>
        <Route exact path="/Train"><Train /></Route>
        <Route exact path="/Cab"><Cab /></Route>
        <Route exact path="/print/:id"><Print/></Route>
        
        <Route>
          <h2>404 error Page Not Found</h2>
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
