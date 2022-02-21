import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="എങ്ങനെ കളിക്കാം" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      കളിയുടെ ലക്ഷ്യം ഒരു വാക്ക് കണ്ടുപിടിക്കലാണ്.വാക്ക് കണ്ടുപിടിക്കാനായി 6 ശ്രമിക്കാവുന്നതാണ്.
      ഓരോ തവണ വാക്ക് ടൈപ്പ് ചെയ്തു Enter  കീ  അമർത്തിയാൽ ഓരോ അക്ഷരത്തിന്മേലും പല നിറം വരും.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ദു"
          status="correct"
        />
        <Cell value="രു" />
        <Cell value="പ" />
        <Cell value="യോ" />
        <Cell value="ഗം" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ഇതിൽ ദു എന്ന അക്ഷരം ശരിയായ സ്ഥാനത്താണ്.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="പ്ര" />
        <Cell value="വ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ർ"
          status="present"
        />
        <Cell value="ത്ത" />
        <Cell value="നം" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
         ഇതിൽ ർ എന്ന അക്ഷരം തെറ്റായ സ്ഥാനത്താണ്. 	
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ക്ര" />
        <Cell value="മീ" />
        <Cell value="ക" />
        <Cell isRevealing={true} isCompleted={true} value="ര" status="absent" />
        <Cell value="ണം" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
         ഇതിലെ ര എന്ന അക്ഷരം വാക്കിൽ ഇല്ലാത്തതാണ്.. 	
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ര" />
        <Cell value="ച" />
        <Cell value="യി" />
        <Cell value="താ"/>
        <Cell isRevealing={true} isCompleted={true} value="വ്" status="partialcorrect"/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
         ഇതിലെ  വ യോ  ് കാരമോ ശെരിയായ സ്ഥാനത്താണ്  	
      </p>

      
    </BaseModal>
  )
}
