import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import './Navbar.css';

function Navbar(){
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    function handleClick(){
        navigate("/");
    }

    function loggedIn(){
        if(user === null) {
            return (
            <NavLink id="login" to="/login">Kirjaudu sisään</NavLink> 
        );
        } else {
            return (
                <>
                    <NavLink to="/analytics">Analytiikka</NavLink>
                    <NavLink id="logout" to="/" onClick={()=>setUser(null)}>Kirjaudu ulos</NavLink>
                </>
            );
        }
    }


    return(
        <div className="navbarwrapper">
            <div id ="logo" className="logo" onClick={handleClick}>
                <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" ry="8" fill="#de8b25ff"/>
                <polyline points="12,20 18,26 28,14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="50" y="26" fontFamily="Arial, sans-serif" fontSize="20" fill="#ffffff" fontWeight="bold">
                    TODO
                </text>
                </svg>
            </div>
            <div id="navLinks" className="navLinks">
                <NavLink id={user ? "frontpage" : undefined} to="/">Etusivu</NavLink>
                {loggedIn()}
            </div>
        </div>
    );
}

export default Navbar;


