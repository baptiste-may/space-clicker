/**
 * Generates a random number between min and max (inclusive of min, exclusive of max).
 * @param min The minimum value (inclusive).
 * @param max The maximum value (exclusive).
 */
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
