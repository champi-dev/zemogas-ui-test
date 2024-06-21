export const levenshtein = (a, b) => {
  const matrix = Array.from({ length: b.length + 1 }, () => [])

  for (let i = 0; i <= b.length; i++) {
    matrix[i][0] = i
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        )
      }
    }
  }

  return matrix[b.length][a.length]
}

export const generateRandomSeconds = () => {
  const minSeconds = 60
  const maxSeconds = 5 * 24 * 60 * 60
  const randomSeconds =
    Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds
  return randomSeconds
}

export const generateRandomNumber = () => {
  const min = 1
  const max = 10
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}
