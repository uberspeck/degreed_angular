// Get decade for given year
// getDecadeForYear(1983) === 1980
export const getDecadeForYear = (year: number): number => {
  return year - year % 10;
};
