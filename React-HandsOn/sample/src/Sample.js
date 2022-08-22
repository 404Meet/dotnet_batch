import React from 'react';
class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: "NewProject"};
    }
render()
{
    return(
        <div>
        <h1>Sample Project Name: {this.state.name}</h1>
        </div>
);
    }
}export default Sample;
