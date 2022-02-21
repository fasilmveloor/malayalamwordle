import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useState } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
import { layout } from '../../constants/layout'

const ROWTYPE = { MAIN: "main", ALT: "alt" };



type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)
  const [rowType, setRowType] = useState(ROWTYPE.MAIN);
  //const [prevChar, setPrevChar] = useState("");

  let rows = layout.rows;
  let altrows = layout.altrows;

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else if (value === 'ALT') {
      toggleLayout()
    } else {
      onChar(value);
      //setPrevChar(value);
    }
  }

  const toggleLayout = () => {
    ROWTYPE.MAIN === rowType
      ? setRowType(ROWTYPE.ALT)
      : setRowType(ROWTYPE.MAIN);
  };

  return (
    <div>
      <div className="flex justify-center mb-1">
        { (rowType === ROWTYPE.MAIN ? rows : altrows)[0].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
      <Key width={65.4} value="ALT" onClick={onClick}>
          ALT
        </Key>
        { (rowType === ROWTYPE.MAIN ? rows : altrows)[1].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
    
        {(rowType === ROWTYPE.MAIN ? rows : altrows)[2].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
  
}
