import tap from 'tap'
import getNextDayOfWeek from "./getNextDayOfWeek"
import {WeekDays} from "../types/Weekdays";

const dateString = "2023-01-03"
const date = new Date(dateString);

tap.equal(getNextDayOfWeek(date, WeekDays.saturday).getFullYear(), 2023 )
tap.equal(getNextDayOfWeek(date, WeekDays.saturday).getUTCMonth(), 0 )

tap.equal(getNextDayOfWeek(date, WeekDays.monday).getDate(), 9 ) // 4
tap.equal(getNextDayOfWeek(date, WeekDays.tuesday).getDate(), 10 )
tap.equal(getNextDayOfWeek(date, WeekDays.wednesday).getDate(), 4 )
tap.equal(getNextDayOfWeek(date, WeekDays.thursday).getDate(), 5 )
tap.equal(getNextDayOfWeek(date, WeekDays.friday).getDate(), 6 )
tap.equal(getNextDayOfWeek(date, WeekDays.saturday).getDate(), 7 )
tap.equal(getNextDayOfWeek(date, WeekDays.sunday).getDate(), 8 ) // 5

tap.equal(date.getDate(), new Date(dateString).getDate() )
tap.equal(date.getFullYear(), new Date(dateString).getFullYear() )
tap.equal(date.getUTCMonth(), new Date(dateString).getUTCMonth() )


