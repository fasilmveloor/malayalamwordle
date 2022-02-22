export const diacritics : any= {
    "\u0D02": true,
    "\u0D03": true,
    "\u0D3E": true,
    "\u0D3F": true,
    "\u0D40": true,
    "\u0D41": true,
    "\u0D42": true,
    "\u0D43": true,
    "\u0D44": true,
    "\u0D46": true,
    "\u0D47": true,
    "\u0D48": true,
    "\u0D4A": true,
    "\u0D4B": true,
    "\u0D4C": true,
    "\u0D4D": true,
    "\u0D57": true,
};
  
export const vowels: any = {
    "\u0D05": true,
    "\u0D06": true,
    "\u0D07": true,
    "\u0D08": true,
    "\u0D09": true,
    "\u0D0A": true,
    "\u0D0B": true,
    "\u0D0C": true,
    "\u0D0E": true,
    "\u0D0F": true,
    "\u0D10": true,
    "\u0D12": true,
    "\u0D13": true,
    "\u0D14": true,
};
  
  
  
/**
 * Convert a string into an array of strings representing Malayalam letters
 *
 * @param {string} word String containing the word to convert to letters
 * @returns an Array of strings that is equivalent to letters in Malayalam
*/
export function toMalayalamLetters(word:String) {
  let letters = [];
  for (let i = 0; i !== word.length; i++) {
    let ch = word[i];
    //diacritics[ch] && letters.length && letters[letters.length - 1].length > 0
    isValid(letters, ch)
      ? (letters[letters.length - 1] += ch)
      : letters.push(ch);
  }
  return letters;
}
  
/**
 * Word length by count of Malayalam letters
 *
 * @param {string} ch Malayalam character to check
 * @param {Array} letters Malayalam letters array
 * @returns true if the character at position is valid else false 
*/
export function isValid(letters:string[], ch:string) {
  if(letters.length) {
    let last = letters[letters.length - 1] 
    if(letters[letters.length - 1].length > 0) {
      if(diacritics[ch]) {
        return true;
      }
      else if(last[last.length-1] === "\u0D4D" && !vowels[last[last.length-2]]) {
        if( ch === 'ര' || ch === 'വ' || ch === 'യ') {
          return true;
        }
        else if(ch === last[last.length-2]) {
          return true;
        }
        else if(last[last.length-2] === 'ങ' && ch === 'ക' ) {
          return true;
        }
        else if(last[last.length-2] === 'ഗ' && (ch === 'ന' || ch === 'മ')) {
          return true;
        }
        else if(last[last.length-2] === 'ക' && ch === 'ഷ') {
          return true;
        }
        else if(last[last.length-2] === 'സ' && (ch === 'റ' || ch === 'ഥ')) {
          return true;
        }
        else if(last[last.length-2] === 'ഞ' && (ch === 'ച' || ch === 'ജ')) {
          return true;
        }
        else if(last[last.length-2] === 'ണ' && (ch === 'ട' || ch === 'ഡ' || ch === 'മ')) {
          return true;
        }
        else if(last[last.length-2] === 'ന' && (ch === 'റ' || ch === 'ത' || ch === 'ദ' || ch === 'മ' || ch === 'ധ')) {
          return true;
        }
        else if(last[last.length-2] === 'ത' && (ch === 'ഭ' || ch === 'സ' || ch === 'മ' || ch === 'ഥ')) {
          return true;
        }
        else if(last[last.length-2] === 'ശ' && ch === 'ച') {
          return true;
        }
        else if(last[last.length-2] === 'ദ' && ch === 'ധ') {
          return true;
        }
        else if(last[last.length-2] === 'ജ' && ch === 'ഞ') {
          return true;
        }
        else if(last[last.length-2] === 'മ' && ch === 'പ') {
          return true;
        }
        else if(last[last.length-2] === 'ഹ' && (ch === 'ന' || ch === 'മ')) {
          return true;
        }
      }
    }
  }
  return false;
}


/**
 * Word length by count of Malayalam letters
 *
 * @param {string} word Malayalam word to check
 * @returns length of the word in Malayalam letters
*/
export function malayalamLength(word:any) {
  return toMalayalamLetters(word).length;
}