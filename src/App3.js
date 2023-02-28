import { useState } from "react";
import "./style.css";

export default function App3(){
    return(
        <div className="App3">
            <Print/>;
        </div>
    )
}

function Print(){
    // myNumber--> varible;
    // setMyNumber--> func this updates the value
    const [myNumber ,setMyNumber] = useState(0);
    function incrementNumber(){
        setMyNumber(myNumber+1);
    }
    return(
    <div>
        <p>{myNumber}</p>
        <button onClick={incrementNumber}>Increment</button>
        
    </div>

    );
}