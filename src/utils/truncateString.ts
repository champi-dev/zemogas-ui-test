export const truncateString = (
  input: string,
  maxLength: number = 63,
): string => {
  const ellipsis = '...'
  if (input.length > maxLength) {
    return input.slice(0, maxLength - ellipsis.length) + ellipsis
  }
  return input
}
