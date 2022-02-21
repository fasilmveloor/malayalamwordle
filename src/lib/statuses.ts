import { solution } from './words'
import { toMalayalamLetters } from '../constants/utils'

export type CharStatus = 'absent' | 'present' | 'correct' | 'partialpresent' | 'partialcorrect'

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    let solutionletters = toMalayalamLetters(solution)
    toMalayalamLetters(word).forEach((letter, i) => {
      if (!solutionletters.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solutionletters[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = toMalayalamLetters(solution)
  const splitGuess = toMalayalamLetters(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
    else {
      let characters = letter.split('')
      characters.forEach((l, j) => {
        if(l === splitSolution[i][j]) {
          statuses[i] = 'partialcorrect'
          solutionCharsTaken[i] = true
          return
        }
      })
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
