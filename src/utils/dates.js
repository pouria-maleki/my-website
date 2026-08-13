export const TEACHING_START_YEAR = 2018
export const currentYear = () => new Date().getFullYear()
export const yearsSince = (year) => Math.max(0, currentYear() - year)
