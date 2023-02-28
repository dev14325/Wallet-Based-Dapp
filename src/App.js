import "./style.css";
export default function App(){
  return (
    <div className="App">
      <Button/>
    </div>
    
  );
}

function Button(){
  function handleClick(){
    console.log("Button CLicked");
  }
  return (
    <button className="button" onClick={handleClick}>
      Click Me !
    </button>
  );
}