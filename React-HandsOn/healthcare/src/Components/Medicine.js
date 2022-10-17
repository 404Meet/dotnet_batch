import React,{Component} from 'react';
import {variables} from './Variables.js';

export default class Employee extends Component{

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
    
    changeMedicineName =(e)=>{
        this.setState({MedicineName:e.target.value});
    }
    changeCategory =(e)=>{
        this.setState({Category:e.target.value});
    }
    changeExpiryPeriod =(e)=>{
        this.setState({ExpiryPeriod:e.target.value});
    }
    changePrice =(e) =>{
        this.setState({Price:e.target.value});
    }
    changeDescription =(e) =>{
        this.setState({Description:e.target.value});
    }
    changePhotoFileName=(e)=>{
        this.setState({PhotoFileName:e.target.value})
    }

    addClick(){
        this.setState({
            modalTitle:"Add Medicine",
            MedicineId:0,
            MedicineName:"",
            Category:"",
            ExpiryPeriod:"",
            Price:0,
            Description:"",
            PhotoFileName:""
        });
    }
    editClick(med){
        this.setState({
            modalTitle:"Edit Medicine",
            MedicineId:med.MedicineId,
            MedicineName:med.MedicineName,
            Category:med.Category,
            ExpiryPeriod:med.ExpiryPeriod,
            Price:med.Price,
            Description:med.Description,
            PhotoFileName:med.PhotoFileName
        });
    }

    createClick(){
        fetch(variables.API_URL+'Medicine',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                MedicineName:this.state.MedicineName,
                Category:this.state.Category,
                ExpiryPeriod:this.state.ExpiryPeriod,
                Price:this.state.Price,
                Description:this.state.Description,
                PhotoFileName:this.state.PhotoFileName
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'Medicine',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                MedicineId:this.state.MedicineId,
                MedicineName:this.state.MedicineName,
                Category:this.state.Category,
                ExpiryPeriod:this.state.ExpiryPeriod,
                Price:this.state.Price,
                Description:this.state.Description,
                PhotoFileName:this.state.PhotoFileName
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'Medicine/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    // imageUpload=(e)=>{
    //     e.preventDefault();

    //     const formData=new FormData();
    //     formData.append("file",e.target.files[0],e.target.files[0].name);

    //     fetch(variables.API_URL+'Medicine/savefile',{
    //         method:'POST',
    //         body:formData
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({PhotoFileName:data});
    //     })
    // }

    render(){
        const {
            Categories,
            Medicines,
            modalTitle,
            MedicineId,
            MedicineName,
            Category,
            ExpiryPeriod,
            Price,
            Description,
            PhotoFileName
        }=this.state;

        return(
<div className='App container'>

    <button type="button"
    id="add"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Medicine
    </button>
    
    
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
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {Medicines.map(med=>
            <tr key={med.MedicineId}>
                <td>{med.MedicineId}</td>
                <td>{med.MedicineName}</td>
                <td>{med.Category}</td>
                <td>{med.ExpiryPeriod}</td>
                <td>{med.Price}</td>
                <td>{med.Description}</td>
                <td><img alt="photo" width="250px" height="250px" src={med.PhotoFileName}/></td>
                <td>
                <button type="button"
                className="btn btn-light mr-1 m-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(med)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
                <button type="button"
                className="btn btn-light mr-1 m-1"
                onClick={()=>this.deleteClick(med.MedicineId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Medicine Name</span>
            <input id="name" type="text" className="form-control"
            value={MedicineName}
            onChange={this.changeMedicineName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Category</span>
            <select className="form-select"
            onChange={this.changeCategory}
            value={Category}>
                {Categories.map(cat=><option key={cat.CategoryId}>
                    {cat.CategoryName}
                </option>)}
            </select>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Expiry</span>
            <input id="exp" type="text" className="form-control"
            value={ExpiryPeriod}
            onChange={this.changeExpiryPeriod}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input id="price" type="text" className="form-control"
            value={Price}
            onChange={this.changePrice}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input id="desc" type="text" className="form-control"
            value={Description}
            onChange={this.changeDescription}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Photo</span>
            <input id="photo" type="text" className="form-control"
            value={PhotoFileName}
            onChange={this.changePhotoFileName}/>
        </div>


     </div>
     <div className="p-2 w-50 bd-highlight">
         <img alt="photo" width="250px" height="250px"
         src={PhotoFileName}/>
         {/* <input className="m-2" type="file" onChange={this.imageUpload}/> */}
     </div>
    </div>

    {MedicineId===0?
        <ul id="add">
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        </ul>
        :null}
        
       
        {MedicineId!==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>


</div>
        )
    }
}
