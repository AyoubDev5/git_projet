import React from 'react';
import Users from './components/Users';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import UserItems from './components/UserItems';

function App() {
  return(
     <Router>
       <div>
           <Navbar/>
           <div className='container mt-2'>
                <Routes>
                     <Route exact path="/users" component={Users}/>
                     <Route exact path="/users/:login" component={UserItems}/>
                     <Route exact component={Users}/>
                </Routes>
           </div>
       </div>
     </Router>  
      
  );
}

export default App;
