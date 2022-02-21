import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="ക്രമീകരണങ്ങൾ" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
          settingName="ഹാർഡ് മോഡ്"
          flag={isHardMode}
          handleFlag={handleHardMode}
        />
        <SettingsToggle
          settingName="ഡാർക്ക് മോഡ്"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="ഹൈ കോൺട്രാസ്റ്റ് മോഡ്"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
        />
      </div>
    </BaseModal>
  )
}
