import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import {variables} from './Variables.js';
import { Link } from "react-router-dom";

export default class UserMedicine extends Component{

    constructor(props){
        super(props);

        this.state={
            Categories:[],
            Medicines:[],
            modalTitle:"",
            MedicineId:0,
            MedicineName:"",
            Category:"",
            ExpiryPeriod:"",
            Price:0,
            Description:"",
            PhotoFileName:"anonymous.png",

            CategoryFilter:"",
            MedicineFilter:"",
            MedicineWithoutFilter:[]
        }
    }

    refreshList(){

        fetch(variables.API_URL+'Medicine')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Medicines:data,MedicineWithoutFilter:data});
        });

        fetch(variables.API_URL+'Category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Categories:data});
        });
    }

    FilterFn(){
        var CategoryFilter = this.state.CategoryFilter;

        var filteredData=this.state.MedicineWithoutFilter.filter(
            function(el){
                return el.Category.toString().toLowerCase().includes(
                    CategoryFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({Medicines:filteredData});
    }

    MedFilterFn(){
        var MedicineFilter = this.state.MedicineFilter;

        var filteredData=this.state.MedicineWithoutFilter.filter(
            function(el){
                return el.MedicineName.toString().toLowerCase().includes(
                    MedicineFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({Medicines:filteredData});
    }

    AddtoCart(){
        this.props.history.push("Cart")
    }

    changeCategoryFilter = (e)=>{
        this.state.CategoryFilter=e.target.value;
        this.FilterFn();
    }

    changeMedicineFilter = (e)=>{
        this.state.MedicineFilter=e.target.value;
        this.MedFilterFn();
    }

    componentDidMount(){
        this.refreshList();
    }
   
    render(){
        const {
            Medicines,
            temp
        }=this.state;

        return(

<div className='App container'>
    <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeCategoryFilter}
            placeholder="Category / Sympton"/>

        <input className="form-control m-2"
            onChange={this.changeMedicineFilter}
            placeholder="Search for Medicine"/>
    </div>
    <br></br>

    <table className="table table-striped">
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
        <th>
            Description
        </th>
        <th>
            Photo
        </th>
        <th>
            AddCart
        </th>
    </tr>
    </thead>
    <tbody>
        { 
        Medicines.map(med=>
            <tr key={med.MedicineId}>
                <td>{med.MedicineId}</td>
                <td>{med.MedicineName}</td>
                <td>{med.Category}</td>
                <td>{med.ExpiryPeriod}</td>
                <td>{med.Price}</td>
                <td>{med.Description}</td>
                <td><img alt="photo" width="250px" height="250px" src={med.PhotoFileName}/></td>
                <td>
                <button id="addtocart" type="button"
                className="btn btn-light mr-1 m-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.AddtoCart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </button>
                {/* <Link className="btn btn-light btn-outline-primary" to={`/cartt/${med.MedicineId}`}>Buy</Link> */}

                </td>
            </tr>
            )}
    </tbody>
    </table>

</div>
        )
    }
}
