//export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_TITLE = 'വേർഡ്‌ലി'
export const WIN_MESSAGES = ['താങ്കൾ വിജയിച്ചിരിക്കുന്നു ', 'താങ്കൾ വിജയിച്ചിരിക്കുന്നു ', 'താങ്കൾ വിജയിച്ചിരിക്കുന്നു ']
export const GAME_COPIED_MESSAGE = 'ഗെയിം ക്ലിപ്ബോർഡിലേക്ക് പകർത്തിയിട്ടുണ്ട് '
export const NOT_ENOUGH_LETTERS_MESSAGE = 'മതിയായ വാക്കുകളില്ല '
export const WORD_NOT_FOUND_MESSAGE = 'വാക്ക് കണ്ടെത്താനായില്ല '
export const HARD_MODE_ALERT_MESSAGE =
  'hard mode ഗെയിമിൻറെ തുടക്കത്തിൽ ഇനേബിൾ ചെയ്യാവുന്നതാണ്!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `ഉത്തരം   ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess} എന്ന അക്ഷരം  ${position}  സ്ഥാനത്താണ് `
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `നൽകുന്ന വാക്കിൽ ${letter} അക്ഷരം ഉണ്ടാകണം `
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'സ്ഥിതിവിവരം '
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'പുതിയ വാക്ക് '
export const SHARE_TEXT = 'പങ്കിടുക '
export const TOTAL_TRIES_TEXT = 'അകെ ശ്രമങ്ങൾ '
export const SUCCESS_RATE_TEXT = 'വിജയശതമാനം'
export const CURRENT_STREAK_TEXT = 'Current Streak '
export const BEST_STREAK_TEXT = 'best streak'
