import { useReducer, useState, useMemo } from "react";
import Card from "./Card";
import './CardList.css';

const initialCards = 
[
  {
    id: "19d5fb07-9af9-4450-a4be-e67346b6c45d",
    date: "2025-08-09",
    headline: "Rakennetaan backend",
    status: "kesken",
    steps: [
      {
        id: "8563c7d6-483c-470c-9e56-fc12b805ca46",
        headline: "Tietokantayhteys",
        description: "Luo yhteys PostgreSQL:ään"
      },
      {
        id: "c64ff150-684a-45f1-bc04-1feb9d4b5f6d",
        headline: "API-endpointit",
        description: "GET /tasks ja POST /tasks"
      }
    ]
  },
  {
    id: "8327138c-b6bb-4011-bc2b-98904366d2cb",
    date: "2025-08-10",
    headline: "Ostoslista",
    status: "aloittamatta",
    steps: [
    {
        id: "8563c7d6-483c-470c-9e56-fc12b805ca46",
        headline: "Violetti bataatti",
        description: ""
      },
      {
        id: "c64ff150-684a-45f1-bc04-1feb9d4b5f6d",
        headline: "Rasvaton maito",
        description: ""
      }
    ]
  }
]


function Reducer(state, action){
    switch(action.type){
        case "ADD":
            return [...state, action.payload];
        
        case "REMOVE":
            return state;

        case "UPDATE":
            return state;

        case "UPDATE_STATUS":
            return state.map((card)=>{
                return card.id === action.payload.id ? {...card, status: action.payload.status} : card
            });

        default:
            return state;   
    }
}

function CardList(){
    const [cards, dispatch] = useReducer(Reducer, initialCards);
    const [activeId, setActiveId] = useState(null);
    const [filter, setFilter] = useState("all");
    const [timeFilter, setTimeFilter] = useState("oldest");

    function cardClick(id){
        setActiveId(prev => (prev === id ? null : id));
    }

    function stepClick(id){
        alert(id);
    }

    function updateStatus(id, newStatus){
        dispatch({type: "UPDATE_STATUS", payload: {id, status: newStatus}});
    }

    const visibleCards = useMemo(() => {
    const base = filter === "all" ? cards : cards.filter(c => c.status === filter);

    const sorted = [...base].sort((a, b) => {
        return timeFilter === "newest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date);
    });

    return sorted;
    }, [cards, filter, timeFilter]);

    return(
        <>
        <h3>Korttisi:</h3>
        <div className="filter">
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="all">Näytä kaikki</option>
                <option value="aloittamatta">Aloittamatta</option>
                <option value="kesken">Kesken</option>
                <option value="valmis">Valmis</option>
            </select>
            <select onChange={(e) => setTimeFilter(e.target.value)}>
                <option value="newest">Uusin ensin</option>
                <option value="oldest">Vanhin ensin</option>
            </select>
        </div>
        <div className="cardlist">
            {visibleCards.map((card)=>{
                return (
                    <Card 
                        key={card.id} 
                        date={card.date} 
                        headline={card.headline} 
                        status={card.status} 
                        steps={card.steps} 
                        isActivated = {activeId===card.id} 
                        cardClick={()=>cardClick(card.id)} 
                        stepClick={(stepId) => stepClick(stepId)}
                        updateStatus={(newStatus)=>updateStatus(card.id, newStatus)}
                    ></Card>
                );
            })}
        </div>
        <div className="input">
            <label>Päivämäärä:</label>
            <input type="date"></input>
            <label>Otsikko:</label>
            <input type="text"></input>
            <label>Status:</label>
            <select>
                <option>Aloittamatta</option>
                <option>Kesken</option>
                <option>Valmis</option>
            </select>
            <div className="buttons">
                <button type="submit" onClick={()=>dispatch({type: "ADD", payload: {id: crypto.randomUUID(), headline: "Tyhjä", description: "tyhjä"}})}>Tallenna</button>
                <button type="button">Tyhjennä</button>
            </div>
        </div>
        </>

    );
}

export default CardList;