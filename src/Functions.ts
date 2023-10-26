/**
* Function to shorten numbers greater than or equal to 1000
* @param {number} num - The number to shorten.
* @returns {string} - Returns a string with number shortened 
*/
export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"
  }
  return num.toString()
}