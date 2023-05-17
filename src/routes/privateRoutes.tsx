import react from 'react'
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Dashboard } from '../pages/dasboard/dashboard';
import isAuthenticated from '../services/auth/isAuthenticated';

function PrivateRoute() {
    return ( 
        isAuthenticated() ? < Dashboard/> : <Link to="/" />
     );
}

export default PrivateRoute;