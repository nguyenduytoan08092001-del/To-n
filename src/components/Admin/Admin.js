import SideBar from "./sidebar";
import './Admin.scss';
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <FaBars onClick={()=>setcollapsed(!collapsed)}/>
            </div>
        </div>
    )
}

export default Admin;