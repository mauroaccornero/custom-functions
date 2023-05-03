import tap from 'tap'
import getLastOfMonths from "./getLastOfMonths"

const dateString = "2023-01-03"
const date = new Date(dateString);

tap.equal(getLastOfMonths(date).getFullYear(), 2023 )
tap.equal(getLastOfMonths(date).getUTCMonth(), 0 )
tap.equal(getLastOfMonths(date).getDate(), 31 )


tap.equal(date.getDate(), new Date(dateString).getDate() )
tap.equal(date.getFullYear(), new Date(dateString).getFullYear() )
tap.equal(date.getUTCMonth(), new Date(dateString).getUTCMonth() )
