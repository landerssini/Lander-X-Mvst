/**
* Function to shorten numbers greater than or equal to 1000
* @param {number} num - The number to shorten.
*/
export const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"
  }
  return num.toString()
}