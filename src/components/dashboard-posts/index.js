import { useState, useEffect } from 'react';
import './dashboard-posts.styles.css';

import DashboardCreatePostComponent from '../dashboard-create-post';

import Cookies from 'js-cookie';
import axios from 'axios';

const DashboardPostsComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts', { headers: { 
            Accept: 'application/json',
            Authorization: `Bearer ${Cookies.get('authToken')}`
        } })
        .then(res => {
            setPosts(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [posts])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dashboard-posts">
            <button onClick={handleClick}>Create New Post</button>
            <DashboardCreatePostComponent isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
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
                    {
                        loading ? <tr><td align="center" colSpan="4">Loading...</td></tr> : posts?.data.map(d => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.title}</td>
                                    <td>{d.created_at}</td>
                                    <td>Delete</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPostsComponent;