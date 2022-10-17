import React from 'react'
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';
import Category from './Category';
import Medicine from './Medicine';

export default function AdminPortal() {
  return (
    <div>
        <BrowserRouter>
            <br></br>
            <h4 className='font-monospace text-center'> Hi Admin!</h4>

            <div className="App container d-flex flex-row">
                {/* <img alt="photo" width="250px" height="250px" src="https://www.svgrepo.com/show/61986/avatar.svg"/>
                <br></br> */}
                
                <NavLink className="form-control btn btn-primary m-1"  to="/category">&nbsp;Edit Category</NavLink>
                
                
                <NavLink className="form-control btn btn-primary m-1" to="/medicine">View Medicines</NavLink>
                
            </div>
            <Switch>
            <Route path='/category' component={Category}/>
            <Route path='/medicine' component={Medicine}/>
            </Switch>
        </BrowserRouter>
    </div>
  )
}
