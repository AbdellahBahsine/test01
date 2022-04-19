import './default-header.styles.css';

import {Link, useLocation} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../features/user/userSlice';

import Cookies from 'js-cookie';
import axios from 'axios';

const DefaultHeaderComponent = ({id}) => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const location = useLocation();

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
        <header className="default-header-component">
            <Link to="/" className="logo">Le Traveler Guide</Link>
            
            <nav>
                <Link to="/">Home</Link>
                {
                    location.pathname == "/article/" + id && <Link to="/articles">Articles</Link>
                }
                {
                    isLoggedIn
                    ? <Link onClick={handleLogout} to="/">Logout</Link>
                    : <Link to="/login">Login</Link>
                }
            </nav>
        </header>
    )
}

export default DefaultHeaderComponent;