import { useState, useEffect } from 'react';
import Timer from './components/Timer/Timer';
import styles from "./App.module.css";

// alert that uses children
function Alert({children}) {
  return (
    <div style={{color: "red", fontWeight: "bold", marginBottom: "20px"}}>
      {children}
    </div>
  )
}

function App() {
  const [gold, setGold] = useState(0);
  const [treasures, setTreasures] = useState(["Gammal stövel"]);
  const [news, setNews] = useState("Laddar nyheter");
  const [playerName, setPlayerName] = useState("");
  const [tempName, setTempName] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("Vaktmästare ser att du nu har " + gold + " guld!");
    if (gold === 20) {
      alert("du är zupa rich!")
    }
  }, [gold]);
  
  
  const handleDig = () => {
    // adjust gold
    setGold(gold + 1);
    setTreasures([...treasures, "Guldmynt"]);

    // flip active state
    setIsActive(!isActive)
  }
 
  // prevent page reload and save name
  const saveName = (e) => {
    e.preventDefault();
    setPlayerName(tempName);
  }

  // get news from api at initial page load
  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        setNews(data.title)
      } catch (error) {
        console.error("getting news failed, error: " + error);
        setNews("kunde inte nå servern.");
      }
    }

    getNews();
  }, []);
  

  return (
    <div style={{textAlign: "center", margin: "50px 500px" }}>
      {/* visa spelarnamn */}
      <div>
        <h1>Gold digger: {playerName}</h1>
        <form onSubmit={saveName}>
          <label>Skriv ditt namn:</label>
          <input 
            style={{marginTop: "10px", marginBottom: "60px", padding: "7px 20px", textAlign: "center"}}
            type="text"
            
            onChange={(e) => setTempName(e.target.value)} 
          />
        </form>
      </div>
      {/* timer */}
      <div>
        <Timer></Timer>
      </div>
      {/* visa guld */}
      <div>
        <h2>guld = {gold}</h2>
        <p>
          {gold >= 10 ? "rich" : "poor, dig more"}
        </p>
        {gold < 5 && (
          <Alert>Varning: Du behöver mer guld!</Alert>
        )}
        <button
        className={`${styles.btn} ${isActive ? styles.active : ""}`} 
        onClick={() => handleDig()}>gräv</button>
      </div>

        {/* visa historik */}
      <div>
        <h3>Min Skattekista:</h3>
        <ul style={{textAlign: "left"}}>
          {treasures.map((item, index) => (
            <li key={index}>
              Hittat föremål: {item}
            </li>
          ))}
        </ul>
      </div>
      
      {/* visa api resultat */}
      <div>
        <p>
          todays API news: {news}
        </p>
      </div>
    </div>
  )
}

export default App
