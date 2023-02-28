import "./style.css";
import { useEffect } from "react";

export default function App4(){
    return(
        <div className="App4">
            <PrintContent/>
        </div>
    );
}

function PrintContent(){
    const [myName,setMyName] =useEffect("");
    function bkchodi2(text){
        setMyName(text);
    }
    return (
        <div>
        <input type="text" onChange={(e)=>bkchodi2(e.target.value)}/>
        <p> Hello {myName}</p>

        
        </div>
            );
}