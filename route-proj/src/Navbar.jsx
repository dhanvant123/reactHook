import {Link, NavLink, useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()
    const handleClick=()=>{
        sessionStorage.removeItem("user");
        navigate("/")
    }
    return(
        <div className="dash-navigation-bar">
            <NavLink to="/dashboard/home">Home</NavLink> | {" "}
            <NavLink to="/dashboard/about">About</NavLink> | {" "}
            <NavLink to="/dashboard/course">Course</NavLink> | {" "}
            <button className="btn-logout" onClick={handleClick}>Logout</button>
        </div>
    )
}export default Navbar;