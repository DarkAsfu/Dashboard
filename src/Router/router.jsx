import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Components/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        children: [
            {
                path: '/',
                element: <DashboardHome/>
            }
        ]
    },
]);

export default router;