import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useErrors } from "./ErrorProvider";
import UserContext from "./UserContext";
import './Login.css';

function Login(){
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { addError } = useErrors();
    const {user, setUser} = useContext(UserContext);

    function onSubmit(data){
        if(checkCredentials(data)) {
            console.log("Onnistui");
            setIsOpen(false);
            navigate("/");
            setUser("Samuli");
        } else {
            addError("Virheellinen käyttäjätunnus tai salasana");
        }
    }

    function checkCredentials(data){
        if(data.username === `Samuli` && data.password === `salasana`) return true;
    }

   function onInvalid(formErrors) {
     Object.values(formErrors).forEach(err => {
       if (err?.message) addError(err.message);
     });
   }

    function handleClick(){
        setIsOpen(false);
        navigate("/");
    }

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
    isOpen ? (
        <div className="overlay" onClick={handleClick} role="dialog" aria-modal="true">
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <h3>Anna käyttäjänimi ja salasana</h3>
            <div className="element">
            <label>Käyttäjänimi:</label>
            <input type="text" {...register("username", { required: "Käyttäjänimi vaaditaan" })} /> 
            </div>
            <div className="element">
            <label>Salasana:</label>
            <input type="password" {...register("password", { required: "Salasana vaaditaan" })} /> 
            </div>
            <div className="buttons">
            <button type="submit">Kirjaudu</button>
            <button type="button" onClick={handleClick}>Peruuta</button>
            </div>
            </form>
        </div>
        </div>
    ) : null
    );
}

export default Login;

