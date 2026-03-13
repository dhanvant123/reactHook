import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import './custom.css'

function Dashboard(){
    const user = sessionStorage.getItem("user");
    console.log(user);
    if(!user){
        return <Navigate to="/"/>
    }
    return(
        <>
        <div className="dashboard-style">
            <Navbar/>
            <Outlet/>
        </div>
        </>
    )
}export default Dashboard;