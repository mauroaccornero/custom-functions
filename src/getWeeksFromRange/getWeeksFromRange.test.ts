import tap from 'tap'
import getWeeksFromRange from "./getWeeksFromRange"

const startDate = new Date("2023-01-03")
const endDate = new Date("2024-04-11")

const store = getWeeksFromRange(startDate,endDate)

tap.equal(store[0].s.getDate(), 3 )
tap.equal(store[0].s.getUTCMonth(), 0 )
tap.equal(store[0].s.getFullYear(), 2023 )
tap.equal(store[0].e.getDate(), 8 )
tap.equal(store[0].e.getUTCMonth(), 0 )
tap.equal(store[0].e.getFullYear(), 2023 )

tap.equal(store[store.length -1].s.getDate(), 8)
tap.equal(store[store.length -1].s.getUTCMonth(), 3 )
tap.equal(store[store.length -1].s.getFullYear(), 2024 )
tap.equal(store[store.length -1].e.getDate(), 11)
tap.equal(store[store.length -1].e.getUTCMonth(), 3 )
tap.equal(store[store.length -1].e.getFullYear(), 2024 )

const storeLength = store.length
for(let i = 0; i < storeLength; i++){
    const {s, e} = store[i]
    tap.equal(s.getFullYear() === e.getFullYear(), true )
    tap.equal(s.getUTCMonth() === e.getUTCMonth(), true )
    tap.equal(s.getDate() <= e.getDate(), true )
}

tap.throws(() => getWeeksFromRange(endDate,startDate), new Error("startDate > endDate"))

const secondStore = getWeeksFromRange(startDate,startDate)
tap.equal(secondStore.length, 1 )
tap.equal(secondStore[0].s.getDate(), startDate.getDate() )
tap.equal(secondStore[0].e.getDate(), startDate.getDate() )
tap.equal(secondStore[0].s.getFullYear(), startDate.getFullYear() )
tap.equal(secondStore[0].e.getFullYear(), startDate.getFullYear() )
tap.equal(secondStore[0].s.getUTCMonth(), startDate.getUTCMonth() )
tap.equal(secondStore[0].e.getUTCMonth(), startDate.getUTCMonth() )
