import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import StorePS from './store/StorePS';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PatientSearch from './components/redux-demos/PatientSearch';
import CompNavBar from './components/CompNavBar';
import PatientSearchCountContainer from './components/redux-demos/PatientSearchCountContainer';
import PatientSearchContainer from './components/redux-demos/PatientSearchContainer';

function App() {
  return (
    <div>
      
        
      <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Patient Search Website</h3>
    </div>
  </div>
</div>


        <Provider store={StorePS}>


        <BrowserRouter>

        <CompNavBar/>

        <PatientSearchCountContainer/>

        <Routes>

        <Route path="/Patient-Search" element={<PatientSearchContainer />} />
        
         
        
        </Routes>
      
        </BrowserRouter>

        </Provider>

     
    </div>
  );
}

export default App;
