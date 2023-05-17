import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import { Dashboard } from '../pages/dasboard/dashboard';
import  Sigin  from '../pages/sigin/sigin';
// import PrivateRoute from './privateRoutes';

function RouteApp() {
    return ( 
        <Router>
            <Routes>
                <Route  path='/' element={< Sigin/>}/>
                <Route path='/app' element={<Dashboard/>}/>
            </Routes>
        </Router>
     );
}

export default RouteApp;