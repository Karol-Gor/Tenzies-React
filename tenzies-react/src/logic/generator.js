import {nanoid} from "nanoid"

export function generateAllNewDice(length) {
    const newDice = []
    for(let i=0; i<length; i++) {
        newDice.push({
            value: Math.floor((Math.random()* 6) + 1 ),
            isHeld: false,
            id: nanoid()
        })
    }
    return newDice
}