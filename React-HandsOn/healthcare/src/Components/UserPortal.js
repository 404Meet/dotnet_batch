import React from 'react'
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';
import Category from './UserCategory';
import Medicine from './UserMedicine';

export default function UserPortal() {
  return (
    <div>
      <BrowserRouter>
            <br></br>
            <div className="App container d-flex flex-row">
                {/* <img alt="photo" width="250px" height="250px" src="https://www.svgrepo.com/show/61986/avatar.svg"/>
                <br></br> */}
                
                <NavLink className="form-control btn btn-primary m-1"  to="/ucategory">&nbsp;Categories</NavLink>
                
                <NavLink className="form-control btn btn-primary m-1" to="/umedicine">Medicines</NavLink>
                
            </div>
            <Switch>
            <Route path='/ucategory' component={Category}/>
            <Route path='/umedicine' component={Medicine}/>
            </Switch>
        </BrowserRouter>
    </div>
  )
}
