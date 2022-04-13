import { useEffect } from 'react';
import './dashboard-posts.styles.css';

import Cookies from 'js-cookie';
import axios from 'axios';

const DashboardPostsComponent = () => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts', { headers: { 
            Accept: 'application/json',
            Authorization: `Bearer ${Cookies.get('authToken')}` 
        } })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="dashboard-posts">
            <button>Create New Post</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Created At</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Paris</td>
                        <td>04/12/2022</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPostsComponent;