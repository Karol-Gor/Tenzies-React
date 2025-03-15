import { useState, useRef, useEffect } from 'react'
import { generateAllNewDice } from './logic/generator'
import Die from "./components/Die"
import Title from "./components/Title"
import Confetti from 'react-confetti'

export default function App() {
  
  const [diceValues, setDiceValues] = useState(() => generateAllNewDice(10))
  const rollButtonRef = useRef(null)

  const gameWon = (diceValues.every(die => die.isHeld) &&
    diceValues.every(die=> die.value === diceValues[0].value)) 

  useEffect(() =>
    {
      if(gameWon && rollButtonRef.current !== null)
        rollButtonRef.current.focus()
    }, [gameWon]
  )
  
  function hold (id) {
    setDiceValues(prevDiceValues => {
      return prevDiceValues.map(item => 
        item.id === id ? {
          ...item, 
          isHeld : !item.isHeld
        } : item)
      }
    )
  }

  const diceComponents = diceValues.map(die => 
    <Die
      key = {die.id}
      die = {die}
      hold = {hold}
    />
  )

  function updateDiceValues () {
    setDiceValues(prevDiceValues => {
      return prevDiceValues.map(item =>
        item.isHeld === true ? 
          item :
          {
            ...item, 
            value : Math.floor((Math.random()* 6) + 1)
          } 
        )
      }
    )
  }

  return (
    <main>
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <Title/>
      <div className="dices">
        {diceComponents}
      </div>
      <div>
        <button 
          name="roll-dice" 
          className="roll-button"
          onClick={gameWon ? () => setDiceValues(generateAllNewDice(10)) : updateDiceValues}
          ref = {rollButtonRef}>
            {gameWon? "New Game" : "Roll"}
          </button>
      </div>
      {gameWon && <Confetti/>}
    </main>
  )
}


