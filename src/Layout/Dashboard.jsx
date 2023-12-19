import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";

const Dashboard = () => {
    return (
        <div>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;