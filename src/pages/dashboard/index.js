import './dashboard.styles.css';

import DashboardHeaderComponent from '../../components/dashboard-header';
import DashboardPostsComponent from '../../components/dashboard-posts';

const DashboardPage = () => {

    return (
        <div className="dashboard-page">
            <DashboardHeaderComponent />
            <DashboardPostsComponent />
        </div>
    )
}

export default DashboardPage;