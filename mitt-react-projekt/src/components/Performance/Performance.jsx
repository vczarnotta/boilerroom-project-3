import { useState } from "react"
import Button from "../Button/Button"
import "./Performance.css"

function Performance({onPerformanceSelect}) {
  // Lista över tillgängliga energinivåer med tillhörande beskrivningar
  const performanceLevels = [
    {level: 1, description: "Mycket låg" },
    {level: 2, description: "Låg" },
    {level: 3, description: "Medel" },
    {level: 4, description: "Hög" },
    {level: 5, description: "Mycket Hög" }
  ]

  // Lokal state för att hålla koll på vilken nivå som är vald
  const [permormance, setPerformance] = useState(0)

  //Uppdaterar både lokal state och informerar föräldrakomponenten vid klick på energinivå-knapp
  const handleClick = (level) => {

    //Om man klickar på samma knapp igen ska den avväljas annars sätt till level
    const newLevel = permormance === level ? 0 : level

    // Uppdatera state med det nya värdet
    setPerformance(newLevel)

    // Skickar värdet vidare så att det kan sparas i historiken, om funktionen finns och något värde är valt
    onPerformanceSelect ? onPerformanceSelect(newLevel) : null
  }

  return(
    <div>
      <h2>Hur var din prestation under passet?</h2>

      <div className="button-group">
      {/* Skapa en knapp för varje energinivå */}
      {performanceLevels.map((performanceLevel) => (
        <Button
        key={performanceLevel.level}
        onClick={() => handleClick(performanceLevel.level)}
        >
          <p className="button-content">
            <span className="performance-level">{performanceLevel.level}</span>
            <span className="performance-description">{performanceLevel.description}</span>
          </p>
        </Button>
      ))}
      </div>

      {/*För kontroll att det fungerar*/}
      <p>Vald nivå: {permormance > 0 ? permormance : "ingen vald ännu"}</p>

    </div>
  )
}

export default Performance