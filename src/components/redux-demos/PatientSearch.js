//Our Patient Presentation Component

import {useRef, useState} from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({search:" "});

    
    // const addNewPatient = () =>
    // {
    //     props.addPatient(textRef.current.value);
    // }


    const listofPatients = () =>
    {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) =>
    {

        setState
        (
            {
                ...state,
                [event.target.name]: event.target.value 



            }
        );

        props.searchPatient(event.target.value);
    
    }

    
<br/>
    return (
       
        <div style={{}}>
        <br /> <br/>

        <table align='center'>Patient Count

        {props.patients && props.patients.map( (item,key) => 
        <tr>
            <td> {key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr> )}
        
        </table><br/>

        <table border="7"><br/>
        
        {props.searchedPatients && props.searchedPatients.map( (item,key) => 
        <tr>
            <td>{key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr>)}
        
        </table>


        <br/><br/>
        <center>
        <input type="text" ref={textRef} name="search" value={state.search}
        onChange = {event => handleChange(event)} /> 
        </center>
        <center>
        <h1>
        <br/>Current value of search:{state.search}
        </h1>
        </center>
        </div>
    )
}

export default PatientSearch;