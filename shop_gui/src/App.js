import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./styles/App.scss"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import Registration from "./components/registration";
import Cassa from "./components/Cassa";

import {ShoppingCartProvider} from "./components/contexts/ShoppingCart";


function App() {
  return (

    <Router >
        <ShoppingCartProvider>
             <Navbar/>

            <div className={"page-content-container"}>
                <Switch>

                    <Route path={"/shop"} component={Shop}/>
                    <Route path={"/cassa"} component={Cassa}/>

                    <Route path={"/contact"} component={Contact}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/password_reset"} component={PasswordReset}/>
                    <Route path={"/registration"} component={Registration}/>

                    <Route path={"/"} component={Home}/>
                </Switch>
            </div>
        </ShoppingCartProvider>
    </Router>

  );
}

export default App;
