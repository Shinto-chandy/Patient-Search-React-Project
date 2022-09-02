import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';



//Saga to fetch Patient List

function* actionwatcherForFetchPatients() 
{
    console.log("2. Inside Patient Saga actionwatcherForFetchPatients");
    yield takeEvery ( "FETCH_PATIENT_LIST", fetchPatientList );
    // yield takeLatest ( "FETCH_PATIENT_LIST", fetchPatientList );
        //"takeLatest" will take the latest value by discarding the previous values 
        //when the user clicks it multiple times
}


function* fetchPatientList()
{

    console.log("3. Inside Patient Saga fetchPatientList");

    const patientsListJSON = yield fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json(),);
    
    yield put( { type:"FETCH-PATIENT-LIST-COMPLETED", 
        payload: { patients : patientsListJSON }} )
 
}

//End of Saga to fetch Patient List


//We need to root saga for all the above
export default function* rootSaga(){
    yield all ( [ actionwatcherForFetchPatients() ] );
};