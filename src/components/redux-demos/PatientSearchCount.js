const PatientSearchCount = (props) => {

    return (
        <div style={{ border: '3px solid purple' }}>
        <br />

        <center> 
           Patient Count: {props.patients && props.patients.length} 
        </center>

        {/* <table border="0">
        Patient List:

        {props.patients && props.patients.map( (item,key) => 
        <tr>
            <td> {key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr> )}
        
        </table> */}

        {/* <table border="7">
        
        {props.searchedPatients && props.searchedPatients.map( (item,key) => 
        <tr>
            <td>{key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr>)}
        
        </table> */}

        {/* <td> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.email} </li> )}
        </td> */}

        <br/><br/>

        </div>
    )
}

export default PatientSearchCount;

