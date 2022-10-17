import React, { Component } from 'react'
import {variables} from './Variables.js';
import { useNavigate } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            Users:[],
            UserName:"",
            Password:"",
            temp:0
        }
    }
    changeName =(e)=>{
        this.setState({UserName:e.target.value});
    }
    changePassword =(e)=>{
        this.setState({Password:e.target.value});
    }

    refreshList(){
        fetch(variables.API_URL+'User')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Users:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    checkLogin(){
        let arr = this.state.Users;
        console.log(arr);
        console.log(this.state.UserName);
        console.log(this.state.Password);
        let name =this.state.UserName;
        let pass =this.state.Password;
        arr.map(u=>
            name == u.UserName && pass == u.Password ? (name == "Admin" ? this.props.history.push("AdminPortal") : this.props.history.push("UserPortal")) : null
            )
    }



  render() {
    const{
        Users,
        UserName,
        Password,
        temp
    }=this.state;
    
    return (
        <div>
        <br></br>
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                      </div>
                        <div className="modal-body">
                        <div className="d-flex flex-row card border-info mb-3" >
                            
                            <div className="p-5 w-30 bd-highlight">
                                 <br></br>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">UserName</span>
                                    <input id="uname" type="text" className="form-control"
                                    onChange={this.changeName}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Password</span>
                                    <input id="pass" type="password" className="form-control"
                                    onChange={this.changePassword}
                                    />
                                </div>

                            </div>
                              <div className="p-3 w-30 bd-highlight">
                                <img alt="photo" width="250px" height="250px" src="https://www.svgrepo.com/show/178970/eye-medical.svg"/>
                              </div>
                        </div>
                        <button id="log" type="button" className="btn btn-primary float-start" onClick={()=>this.checkLogin()}>Login</button>
                        </div> 

            </div>

        </div>
        </div>
    )
  }
}
