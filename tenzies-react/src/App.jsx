import { useState} from 'react'
import { generateAllNewDice } from './logic/generator'
import Die from "./components/Die"
import Title from "./components/Title"

export default function App() {
  
  const [diceValues, setDiceValues] = useState(generateAllNewDice(10))
  
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
      <Title/>
      <div className="dices">
        {diceComponents}
      </div>
      <div>
        <button 
          name="roll-dice" 
          className="roll-button"
          onClick={updateDiceValues}>
            Roll
          </button>
      </div>
    </main>
  )
}


