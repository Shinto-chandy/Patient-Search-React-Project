// This is our Container Component for PatientCount

import {connect} from 'react-redux';
import PatientSearchCount from './PatientSearchCount';

//Map the Global State to the Presentation Components props
const mapStateToProps = (store)=>
{
    return{
        patients:store.PSR.patients,
        searchedPatients:store.PSR.searchedPatients
    }
}




export default connect(mapStateToProps,null) (PatientSearchCount);

