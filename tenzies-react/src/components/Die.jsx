export default function Die ({die, hold}){
    const buttonStyle = {
        backgroundColor: die.isHeld===true ? "#59E391" : "#FFFFFF"
    }
    return (
        <button 
            className="die-button"
            style = {buttonStyle}
            onClick = {() => hold(die.id)}
            aria-pressed={die.isHeld}
            aria-label={`Die with value ${die.value}, ${die.isHeld ? "held" : "not held"}`}
        >{die.value}
        </button>
    )
}