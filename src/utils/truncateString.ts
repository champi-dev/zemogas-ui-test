export const truncateString = (
  input: string,
  maxLength: number = 63,
): string => {
  if (input.length > maxLength) {
    return input.slice(0, maxLength) + '...'
  }
  return input
}
