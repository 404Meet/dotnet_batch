import React,{Component} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { variables } from './Variables';
import { Link } from "react-router-dom";

// export default class Cart extends Component{
//     render(){
//         return(
//             <div>
//                 Cart

//             </div>
//         )
//     }
// }

export default function Cartt(props){
    const path= variables.PHOTO_URL;
    const{id} =useParams();
    let[buydata,setbuydata]=React.useState([])
    axios.get(`https://localhost:7283/Buy?id=${id}`).then(response=>{
        setbuydata(response.data)
    })

    return(
        <div>
            {buydata.map(emp=>
                <div className="card float-right" key={emp.MedicineId}>
                    <div>
                    <div className="row">
                        <div className="col-sm-5">
                            <img width="250px" height="250px" className="d-block w-100" src={emp.PhotoFileName} alt=""/>
                        </div>
                        <div className="col-sm-7">
                        <div className="v1">
                            <div className="card-block">
                                <h2 className="name">{emp.MedicineName}</h2>
                                <div className="border"><h3 className="sp">Description:</h3><p className="desc">{emp.Description}</p></div>
                                <div className="border"><h3 className="sp">Price:</h3><p className="desc">{emp.Price}</p></div>
                                <br></br>
                                <Link to="/checkout" className="btn btn-success btn-sm float-right"><span className="pay-btn">Pay now</span></Link>
                            </div>

                        </div>
                        </div>
                            

                    </div>
                    </div>
                </div>
                )}
        </div>
    )
}