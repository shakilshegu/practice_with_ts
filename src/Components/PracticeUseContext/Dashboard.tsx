
import Profile from "./Profile";
import Sidebar from "./Sidebar";

interface DashboardProps {
}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div>
        <Sidebar />
        <Profile />
    </div>
  )
};

export default Dashboard;