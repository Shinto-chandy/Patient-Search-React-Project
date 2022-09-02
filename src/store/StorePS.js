import { createStore, combineReducers, applyMiddleware } from 'redux'


import PatientSearchSaga from '../sagas/PatientSearchSaga';
import createMiddleWare from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import PatientSearchReducer from '../reducers/PatientSearchReducer';



const sagaMiddleWare = createMiddleWare();


const rootReducer = combineReducers({

    PSR:PatientSearchReducer
    //(firstpart can be any name : secondpart is the classname)
});


//Creating the Store
const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


sagaMiddleWare.run(PatientSearchSaga);


export default Store;