import addDays from "./addDays";

function getNextSunday(date: Date) {
    const day = date.getDay()
    const daysDiff = (7 - day)
    return addDays(date, daysDiff)
}

export default getNextSunday
