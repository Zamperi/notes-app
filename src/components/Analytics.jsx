import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

function Analytics(){

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user===null) navigate("/");
    },[]);
    
    return(
        <div>
            <h2>Analytiikka</h2>
        </div>
    );
}

export default Analytics;