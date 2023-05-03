import tap from 'tap'
import addDays from "./addDays"

const dateString = "2023-01-03"
const date = new Date(dateString);

tap.equal(addDays(date,1).getDate(), 4 )
tap.equal(addDays(date,6).getDate(), 9)
tap.equal(addDays(date,1).getFullYear(), 2023 )
tap.equal(addDays(date,1).getUTCMonth(), 0 )

tap.equal(date.getDate(), new Date(dateString).getDate() )
tap.equal(date.getFullYear(), new Date(dateString).getFullYear() )
tap.equal(date.getUTCMonth(), new Date(dateString).getUTCMonth() )
