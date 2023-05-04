import getLastOfMonths from "./utils/getLastOfMonths";
import addDays from "./utils/addDays";
import {Store} from "./types/Store";
import getNextDayOfWeek from "./utils/getNextDayOfWeek";
import {Options} from "./types/Options";
import defaultOptions from "./constants/defaultOptions";

/**
 *
 * getWeeksFromRange() - Return an array of weeks from a specific range of dates.
 *
 * @param startDate - initial Date of range
 * @param endDate - final Date of range
 * @param options - options object
 * @param store - store weeks array
 */
function getWeeksFromRange(startDate:Date,endDate:Date,options: Options = defaultOptions, store:Store = []){

    if(startDate.getTime() > endDate.getTime()){
        throw new Error("startDate > endDate")
    }

    const nextSunday = getNextDayOfWeek(startDate, options.weekEndsOn)
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
        getWeeksFromRange(newStartDate,endDate,options,store)
    }

    return store

}

export default getWeeksFromRange
