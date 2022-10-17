import React, { Component } from 'react'

export default class Payment extends Component {
  render() {
    return (
      <div>
            <center>
            <br></br>
            <h2 >Order Confirmed</h2>
            <br></br>
            
            <div className="App container card text-white bg-info border-danger">
                <div className="card-header text-center">Receipt</div>
                <div className="card-body">
                    <img src="https://img.icons8.com/plasticine/344/verified-account.png" />
                    <center>
                     
                    <br></br>
                    
                    <tr className="card-title">
                        <td align="right">Total Paid:</td>
                        <td align="center">RS. 180 /-</td>
                    </tr>
                    
                    <p className="card-text">Thank You!!! Keep Smiling. It's the Best Medicine. </p>
                    </center>
                </div>
            </div>
            </center>
        </div>
    )
  }
}
