import React, { Component } from 'react';
import {variables} from './Variables.js';

export default class Cart extends Component {
    constructor(props){
        super(props);
    this.state={
        Medicines:[],
        total:180
    }
}
    refreshList(){
        fetch(variables.API_URL+'Medicine')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Medicines:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    payRedirect(){
        this.props.history.push("Payment")
    }
  render() {
    const {
        Medicines
    }=this.state
    console.log(this.state.Medicines)
    return (
    <div className='App container'>
    <table className="table table-striped m-1">
    <thead>
    <tr>
        <th>
            MedicineId
        </th>
        <th>
            MedicineName
        </th>
        <th>
            Category
        </th>
        <th>
            Expiry
        </th>
        <th>
            Price
        </th>
        {/* <th>
            Description
        </th> */}
        <th>
            Photo
        </th>
    </tr>
    </thead>
    <tbody>
        {Medicines.slice(1,3).map(med=>
            <tr key={med.MedicineId}>
                <td>{med.MedicineId}</td>
                <td>{med.MedicineName}</td>
                <td>{med.Category}</td>
                <td>{med.ExpiryPeriod}</td>
                <td>{med.Price}</td>
                {/* <td>{med.Description}</td> */}
                <td><img alt="photo" width="60px" height="60px" src={med.PhotoFileName}/></td>
            </tr>
            )}
    </tbody>
    </table>
        <div>
            <div className="text-end"> 
            <button id="total" type="button" onClick={()=>this.payRedirect()} class="btn btn-primary m-1"><i class="bi bi-wallet-fill"></i> &nbsp; Grand Total: {this.state.total} </button>
            <button id="total" type="button" onClick={()=>this.payRedirect()} class="btn btn-info m-1"><i class="bi bi-paypal"></i> &nbsp; PayPal</button>
            <button id="total" type="button" onClick={()=>this.payRedirect()} class="btn btn-danger m-1"><i class="bi bi-wallet"></i> &nbsp; UPI</button>
            <button id="total" type="button" onClick={()=>this.payRedirect()} class="btn btn-warning m-1"><i class="bi bi-credit-card"></i> &nbsp; Card</button>
            </div>
        </div>
    </div>
    )
  }
}

