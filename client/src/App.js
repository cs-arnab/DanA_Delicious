import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import 'react-bootstrap'
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import Footer from "./components/Footer";
import NotFound from "./screens/notFound";

function App() {
  return (
    <div className="App">
      <div className="cbody">
      <Navbar />
      <BrowserRouter>
        {/* <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/orders" exact component={Ordersscreen} />
        {/* nested routeing thats why we are not use "exact" keyword */}
        {/* <Route path="/admin" exact component={Adminscreen} /> */}
        <Switch>
          <Route path="/" exact component={Homescreen} />
          <Route path="/cart" exact component={Cartscreen} />
          <Route path="/register" exact component={Registerscreen} />
          <Route path="/login" exact component={Loginscreen} />
          <Route path="/orders" exact component={Ordersscreen} />
          {/* nested routeing thats why we are not use "exact" keyword */}
          <Route path="/admin" component={Adminscreen} />
          <Route path="/notFound" exact component={NotFound} />
          <Redirect to="/notFound" exact />
        </Switch>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
