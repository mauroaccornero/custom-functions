import addDays from "./addDays";
import {WeekDays} from "../types/Weekdays";

function getNextDayOfWeek(date: Date, dayOfWeek: WeekDays){
    const day = date.getDay()
    let daysDiff;
    if(day === dayOfWeek){
        daysDiff = 7
    }else if(day > dayOfWeek){
        daysDiff = 7 - (day - dayOfWeek)
    }else{
        daysDiff = dayOfWeek - day
    }

    return addDays(date, daysDiff)
}

export default getNextDayOfWeek
