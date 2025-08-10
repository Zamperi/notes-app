

function Card({date, headline, status, steps, isActivated, cardClick, stepClick, updateStatus}){
    return(
        <div className={`card ${isActivated ? "activated" : ""}`} onClick={cardClick}>
            <label>{date}</label>
            <label>{headline}</label>
            <select value={status} onClick={(e)=> {e.stopPropagation()}} onChange={(event)=>{updateStatus(event.target.value)}}>
                <option value= "aloittamatta">Aloittamatta</option>
                <option value="kesken">Kesken</option>
                <option value="valmis">Valmis</option>
            </select>
            <ul className="steps">
                {steps.map((step)=>{
                    return (
                        <li key={step.id} className="step" onClick={(e) => { e.stopPropagation(); stepClick(step.id); }}>
                            <h5>{step.headline}</h5>
                            <label>{step.description}</label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Card;