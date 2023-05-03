import getNextSunday from "./utils/getNextSunday";
import getLastOfMonths from "./utils/getLastOfMonths";
import addDays from "./utils/addDays";
import {Store} from "./types";

/**
 *
 * getWeeksFromRange() - Return an array of weeks from a specific range of dates.
 *
 * @param startDate - initial Date of range
 * @param endDate - final Date of range
 * @param store - store weeks array
 */
function getWeeksFromRange(startDate:Date,endDate:Date, store:Store = []){

    if(startDate.getTime() > endDate.getTime()){
        throw new Error("startDate > endDate")
    }

    const nextSunday = getNextSunday(startDate)
    const endOfMonthDate = getLastOfMonths(startDate)
    let endOfWeekDate = nextSunday;

    if(nextSunday.getTime() >= endOfMonthDate.getTime()) {
        endOfWeekDate = endOfMonthDate;
    }

    if(endOfWeekDate.getTime() > endDate.getTime()){
        endOfWeekDate = endDate;
    }

    const newStartDate = addDays(endOfWeekDate,1)

    store.push({"s":startDate,"e":endOfWeekDate})

    if(endOfWeekDate.getTime() < endDate.getTime()){
        getWeeksFromRange(newStartDate,endDate,store)
    }

    return store

}

export default getWeeksFromRange
