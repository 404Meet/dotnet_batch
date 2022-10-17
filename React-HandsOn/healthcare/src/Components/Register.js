import React, { Component } from 'react';
import {variables} from './Variables.js';

export default class Register extends Component 
{

    constructor(props){
        super(props);

        this.state={
            Users:[],
            UserName:"",
            Password:"",
            EmailID:"",
            Mobile:""
          
        }
    }
    changeName =(e)=>{
        this.setState({UserName:e.target.value});
    }
    changePassword =(e)=>{
        this.setState({Password:e.target.value});
    }
    changeEmailID =(e)=>{
        this.setState({EmailID:e.target.value});
    }
    changeMobile =(e) =>{
        this.setState({Mobile:e.target.value});
    }

    createClick(){
        fetch(variables.API_URL+'User',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserName:this.state.UserName,
                Password:this.state.Password,
                EmailID:this.state.EmailID,
                Mobile:this.state.Mobile,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result+"...Login Now");
        },(error)=>{
            alert('Failed');
        })
    }
  render() {
    return (
    <div>
            <br></br>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Register</h5>
                          </div>
                            <div className="modal-body">
                            <div className="d-flex flex-row card border-info mb-3" >
                                
                                <div className="p-5 w-30 bd-highlight">
                                
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

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Email ID</span>
                                        <input id="email" type="text" className="form-control"
                                        onChange={this.changeEmailID}
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Mobile</span>
                                        <input id="mobile" type="text" className="form-control"
                                        onChange={this.changeMobile}
                                        />
                                    </div>   
                                </div>
                                  <div className="p-3 w-30 bd-highlight">
                                    <img alt="photo" width="250px" height="250px" src="https://www.svgrepo.com/show/178973/profile-social.svg"/>
                                  </div>
                            </div>
                            <button id="reg" type="button" className="btn btn-primary float-start" onClick={()=>this.createClick()}>Create</button>
                            </div> 
                </div>

            </div>
    </div>
    )
  }
}
