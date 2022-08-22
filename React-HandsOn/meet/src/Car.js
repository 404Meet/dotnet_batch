import React from 'react';
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {brand: "Ford", model: "Ford"};
    }
render()
{
    return(
        <div>
        <h1>My Car {this.state.brand}</h1>
        </div>
);
    }
}export default Car;
