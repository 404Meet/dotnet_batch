import React from 'react';
class School_One extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: "J.B.Khot High School", board: "Maharashtra"};
    }
render()
{
    return(
        <div>
        <h1>Using Class Component<br></br>School Name: {this.state.name} <br></br>Board Name: {this.state.board}</h1>
        </div>
);
    }
}export default School_One;
