import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { toMalayalamLetters } from '../../constants/utils'

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {toMalayalamLetters(guess).map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
