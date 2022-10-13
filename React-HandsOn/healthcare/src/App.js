import './App.css';
import Home from './Components/Home';
import Employee from './Components/Employee';
import Department from './Components/Department';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';
import Category from './Components/Category';
import Medicine from './Components/Medicine';

function App() {
  return (
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
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-primary nav-link" to="/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-primary nav-link" to="/employee">
              Employee
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-primary nav-link" to="/category">
              Category
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-primary nav-link" to="/medicine">
              Medicine
            </NavLink>
            </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/>
        <Route path='/category' component={Category}/>
        <Route path='/medicine' component={Medicine}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
