import React,{Component} from 'react';
import {variables} from './Variables.js';

export default class UserCategory extends Component{

    constructor(props){
        super(props);

        this.state={
            Categories:[],
            modalTitle:"",
            CategoryName:"",
            CategoryId:0,

            CategoryIdFilter:"",
            CategoryNameFilter:"",
            CategoryWithoutFilter:[]
        }
    }

    FilterFn(){
        var CategoryIdFilter=this.state.CategoryIdFilter;
        var CategoryNameFilter = this.state.CategoryNameFilter;

        var filteredData=this.state.CategoryWithoutFilter.filter(
            function(el){
                return el.CategoryId.toString().toLowerCase().includes(
                    CategoryIdFilter.toString().trim().toLowerCase()
                )&&
                el.CategoryName.toString().toLowerCase().includes(
                    CategoryNameFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({Categories:filteredData});

    }

    sortResult(prop,asc){
        var sortedData=this.state.CategoryWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        });

        this.setState({Categories:sortedData});
    }

    changeCategoryIdFilter = (e)=>{
        this.state.CategoryIdFilter=e.target.value;
        this.FilterFn();
    }
    changeCategoryNameFilter = (e)=>{
        this.state.CategoryNameFilter=e.target.value;
        this.FilterFn();
    }

    refreshList(){
        fetch(variables.API_URL+'Category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Categories:data,CategoryWithoutFilter:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }


    render(){
        const {
            Categories,
        }=this.state;

        return(
<div className='App container'>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            <div className="d-flex flex-row">

            
            <input className="form-control m-2"
            onChange={this.changeCategoryIdFilter}
            placeholder="Filter"/>
            
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('CategoryId',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('CategoryId',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>

            </div>
            CategoryId
        </th>
        <th>
        <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeCategoryNameFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('CategoryName',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('CategoryName',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            CategoryName
      
        </th>
    </tr>
    </thead>
    <tbody>
        {Categories.map(cat=>
            <tr key={cat.CategoryId}>
                <td>{cat.CategoryId}</td>
                <td>{cat.CategoryName}</td>
            </tr>
            )}
    </tbody>
    </table>

</div>
        )
    }
}
