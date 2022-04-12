import './dashboard-header.styles.css';

import {Link} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setLogout } from '../../features/user/userSlice';

import Cookies from 'js-cookie';
import axios from 'axios';

const DashboardHeaderComponent = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        axios.delete('http://localhost:8000/api/logout', { headers: { 
            Accept: 'application/json',
            Authorization: `Bearer ${Cookies.get('authToken')}` 
        } })
        .then(res => {
            dispatch(setLogout())
            Cookies.remove('authToken')
        })
        .catch(err => console.log(err))
    }

    return (
        <header className="dashboard-header-component">
            <Link to="/" className="logo">Le Traveler Guide</Link>
            
            <nav>
                <Link onClick={handleLogout} to="/">Logout</Link>
            </nav>
        </header>
    )
}

export default DashboardHeaderComponent;