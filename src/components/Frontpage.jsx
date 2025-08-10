import { useContext } from 'react';
import UserContext from './UserContext';
import CardList from './CardList';
import './Frontpage.css';

function Frontpage(){
    const {user, setUser} = useContext(UserContext);

    function greeting(){
        if(user === null) return <h2>Tervetuloa! Kirjaudu sisään</h2>
        return cards();
    }

    function cards(){
        return <CardList></CardList>
    }
    
    return(
        <>
            {greeting()}
        </>
    );
}

export default Frontpage;