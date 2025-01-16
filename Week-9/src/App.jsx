import { useState } from "react";
import "./App.css";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";



function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [playerDice, setPlayerDice] = useState(null);
  const [computerScore, setComputerScore] = useState(0);
  const [computerDice, setComputerDice] = useState(null);
 
  const [rolling, setRolling] = useState(false);

 
  const imges = [dice1, dice2, dice3, dice4, dice5, dice6];
  const rollDice = () => {
    setRolling(true);
    
    const randomPlayer = Math.floor(Math.random() * 6);
    const randomComputer = Math.floor(Math.random() * 6);

    setPlayerDice(randomPlayer);
    setComputerDice(randomComputer);

    if (randomPlayer > randomComputer) {
      
      setPlayerScore((prev) => prev + 1);
     
    } else if (randomPlayer < randomComputer) {
      setComputerScore((prev) => prev + 1);
    }

    // Rolling durumunu false yap
    setTimeout(() => {
      setRolling(false);
    }, 1000); // 1 saniye bekleme
  };

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <div className="DiceDiv">
        <div>
          <h3>Player</h3>
          <div>
            {playerDice !== null && (
              <img src={imges[playerDice]} alt={`Player Dice ${playerDice + 1}`} />
            )}
          </div>
        </div>
        <div>
          <h3>Computer</h3>
          <div>
            {computerDice !== null && (
              <img src={imges[computerDice]} alt={`Computer Dice ${computerDice + 1}`} />
            )}
          </div>
        </div>
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
      <div>
        <h2>Scores</h2>
        <div>Player: {playerScore}</div>
        <div>Computer: {computerScore}</div>
        
      </div>
    </div>
  );
}

export default App;
