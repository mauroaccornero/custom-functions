import tap from 'tap'
import getNextSunday from "./getNextSunday"

const dateString = "2023-01-03"
const date = new Date(dateString);

tap.equal(getNextSunday(date).getFullYear(), 2023 )
tap.equal(getNextSunday(date).getUTCMonth(), 0 )
tap.equal(getNextSunday(date).getDate(), 8 )

tap.equal(date.getDate(), new Date(dateString).getDate() )
tap.equal(date.getFullYear(), new Date(dateString).getFullYear() )
tap.equal(date.getUTCMonth(), new Date(dateString).getUTCMonth() )
