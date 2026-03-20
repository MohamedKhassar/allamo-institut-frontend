import { Outlet } from "react-router-dom";
import LinksLayout from "../components/LinksLayout";

function DashboardLayout() {
    return (
        <div className="flex ">
            <LinksLayout />
            <Outlet />
        </div>
    );
}
export default DashboardLayout;