import './App.css';
import Home from './Components/Home';
import Employee from './Components/Employee';
import Department from './Components/Department';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';
import Category from './Components/Category';
import Medicine from './Components/Medicine';
import Login from './Components/Login';
import Register from './Components/Register';
import UserPortal from './Components/UserPortal';
import AdminPortal from './Components/AdminPortal';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import cartt from './Components/cartt';

function App() {
  return (
    <div>
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" to="/home">HealthCareByABC</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
              <li className="nav-item- m-1">
                <NavLink className="btn btn-outline-primary nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item- m-1">
                <NavLink className="btn btn-outline-primary nav-link" to="/department">
                  Department
                </NavLink>
              </li>
              <li className="nav-item- m-1">
                <NavLink className="btn btn-outline-primary nav-link" to="/employee">
                  Employee
                </NavLink>
              </li> */}
              {/* <li className="nav-item- m-1">
                <NavLink className="btn btn-outline-primary nav-link" to="/category">
                  Category
                </NavLink>
              </li> */}
              {/* <li className="nav-item- m-1">
                <NavLink className="btn btn-outline-primary nav-link" to="/medicine">
                  Medicine
                </NavLink>
              </li> */}
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto">
              <li id="Login" className="nav-item- m-1">
                <NavLink id="Login" className="btn btn-outline-primary nav-link" to="/login" >
                  Login
                </NavLink>
              </li>
              <li id="Registeration" className="nav-item- m-1">
                <NavLink id="Registeration" className="btn btn-outline-primary nav-link" to="/register" >
                  Register
                </NavLink>
              </li>
            </ul>
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <Switch>
        <Route path='/home' component={Home}/>
        {/* <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/> 
        <Route path='/category' component={Category}/>
        <Route path='/medicine' component={Medicine}/> */}
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Cart' component={Cart}/>
        <Route path='/cartt/:id' component={cartt}/>
        <Route path='/Payment' component={Payment}/>
        <Route path='/AdminPortal' component={AdminPortal}/>
        <Route path='/UserPortal' component={UserPortal}/>
    </Switch>
    </BrowserRouter> 
    <br></br>
    <center>
    <h4>
      HealthCareByABC
    </h4>
    <p>The E-Pharmacy always for you, available 24/7. @MeetPopat</p>
    </center>

</div>
  );
}

export default App;
