import React from "react";
function School(){
    return(
    <div>
        <SchoolChild name="JAYABEN KHOT HIGH SCHOOL" board="MAHARASHTRA"/>
        <SchoolChild name="JAYABEN KHOT" board="MAHARASHTRA"/>
    </div>
    );
}
const element = <schoolChild books="200" />;
function SchoolChild(props){
    return(
    <div>
         <h1>
            Using Functional Component - App Child
            <br></br>
            Name: {props.name}
            <br></br>
            Board: {props.board}
            <br></br>
            Books: {props.books}
            <br></br>
        </h1>
    </div>
    );
}
export default School;

