/**
 * Generates a random number between min and max (inclusive of min, exclusive of max).
 * @param min The minimum value (inclusive).
 * @param max The maximum value (exclusive).
 */
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const CLICK_BASE_COST = 100;
export const CLICK_COST_FACTOR = 50;

/**
 * Returns the cost of upgrading the click from the given level to the next one.
 * @param level The current click level (starts at 1).
 */
export function getClickUpgradeCost(level: number) {
  const currentLevel = Math.max(1, Math.floor(level));
  return CLICK_BASE_COST + CLICK_COST_FACTOR * (currentLevel - 1) ** 2;
}
