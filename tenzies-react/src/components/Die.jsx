export default function Die ({die, hold}){
    const buttonStyle = {
        backgroundColor: die.isHeld===true ? "#59E391" : "#FFFFFF"
    }
    return (
        <button 
            className="die-button"
            style = {buttonStyle}
            onClick = {() => hold(die.id)}
        >{die.value}
        </button>
    )
}