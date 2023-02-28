export default function App2(){
    return(
        <div className="App2">
            <PrintText/>
        </div>

    );
}

function PrintText(){
    function bkchodi(text){
        console.log(text);
    }

    return(
        <input type="text" onChange={(e)=>bkchodi(e.target.value)}/>

    );
}