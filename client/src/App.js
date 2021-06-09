import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>

        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
      
      </BrowserRouter>
      {/* <Homescreen/> */}
    </div>
  );
}

export default App;
