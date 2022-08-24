import React, { useState } from "react";
function School_two(props){
    const [Grade, GGrade] = useState('A ');    
    const [name] = useState('JBK');
    const board =useState('MH');
    const books = 100;
    const Medium = "English";
    return(
        <h1>
            Using Functional Component - useState Hook
            <br></br>
            Name: {name}
            <br></br>
            Board: {board}
            <br></br>
            Books: {books}
            <br></br>
            Medium: {Medium}
            <br></br>
            Grade: {Grade} 
            <button onClick={() => GGrade("A+")}> Click Here TO Change Grade</button>
            Star: {Grade}
            <br></br>
            HELLO
        </h1>
    );
}
export default School_two;