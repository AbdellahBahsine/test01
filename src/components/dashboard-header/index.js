import {useState} from 'react';
import './dashboard-header.styles.css';

import {Link} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setLogout } from '../../features/user/userSlice';

import Cookies from 'js-cookie';
import axios from 'axios';

const DashboardHeaderComponent = () => {

    const [open, setOpen] = useState(false);

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

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <header className="dashboard-header-component">
            <Link to="/" className="logo">Le Traveler Guide</Link>
            
            <nav className="menu">
                <Link to="/home">Home</Link>
                <Link to="/articles">Articles</Link>
                <div className="login-links">
                    <i class="fa fa-chevron-down" onClick={handleClick}></i>
                    <div className={open ? "login-links__inner open" : "login-links__inner"}>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link onClick={handleLogout} to="/">Logout</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DashboardHeaderComponent;