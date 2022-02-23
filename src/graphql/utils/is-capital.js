module.exports = isCapital = (string) => {
  const charCode = string.charCodeAt(0)
  return charCode >= 65 && charCode <= 90
}
