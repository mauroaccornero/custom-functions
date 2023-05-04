import tap from 'tap'
import getWeeksFromRange from "./getWeeksFromRange"

const startDate = new Date("2023-01-03")
const endDate = new Date("2024-04-11")

tap.test('Should return a valid output',  async t => {
    const store = getWeeksFromRange(startDate, endDate)

    t.equal(store[0].s.getDate(), 3)
    t.equal(store[0].s.getUTCMonth(), 0)
    t.equal(store[0].s.getFullYear(), 2023)
    t.equal(store[0].e.getDate(), 8)
    t.equal(store[0].e.getUTCMonth(), 0)
    t.equal(store[0].e.getFullYear(), 2023)

    t.equal(store[store.length - 1].s.getDate(), 8)
    t.equal(store[store.length - 1].s.getUTCMonth(), 3)
    t.equal(store[store.length - 1].s.getFullYear(), 2024)
    t.equal(store[store.length - 1].e.getDate(), 11)
    t.equal(store[store.length - 1].e.getUTCMonth(), 3)
    t.equal(store[store.length - 1].e.getFullYear(), 2024)

    const storeLength = store.length
    for (let i = 0; i < storeLength; i++) {
        const {s, e} = store[i]
        t.equal(s.getFullYear() === e.getFullYear(), true)
        t.equal(s.getUTCMonth() === e.getUTCMonth(), true)
        t.equal(s.getDate() <= e.getDate(), true)
    }
})
tap.test('Should throw error with invalid input',  async t => {
    t.throws(() => getWeeksFromRange(endDate, startDate), new Error("startDate > endDate"))
})
tap.test('Should return a single week array with a single day range',  async t => {
const singleWeekStore = getWeeksFromRange(startDate,startDate)
t.equal(singleWeekStore.length, 1 )
t.equal(singleWeekStore[0].s.getDate(), startDate.getDate() )
t.equal(singleWeekStore[0].e.getDate(), startDate.getDate() )
t.equal(singleWeekStore[0].s.getFullYear(), startDate.getFullYear() )
t.equal(singleWeekStore[0].e.getFullYear(), startDate.getFullYear() )
t.equal(singleWeekStore[0].s.getUTCMonth(), startDate.getUTCMonth() )
t.equal(singleWeekStore[0].e.getUTCMonth(), startDate.getUTCMonth() )
})

tap.test('Should return the right output with weekEndsOn option',  async t => {
    const fridayWeekStore = getWeeksFromRange(startDate, endDate, {weekEndsOn: 5})
    t.equal(fridayWeekStore[0].s.getDate(), 3)
    t.equal(fridayWeekStore[0].s.getUTCMonth(), 0)
    t.equal(fridayWeekStore[0].s.getFullYear(), 2023)
    t.equal(fridayWeekStore[0].e.getDate(), 6) // 3
    t.equal(fridayWeekStore[0].e.getUTCMonth(), 0)
    t.equal(fridayWeekStore[0].e.getFullYear(), 2023)

    t.equal(fridayWeekStore[fridayWeekStore.length - 1].s.getDate(), 6)
    t.equal(fridayWeekStore[fridayWeekStore.length - 1].s.getUTCMonth(), 3)
    t.equal(fridayWeekStore[fridayWeekStore.length - 1].s.getFullYear(), 2024)
    t.equal(fridayWeekStore[fridayWeekStore.length - 1].e.getDate(), 11)
    t.equal(fridayWeekStore[fridayWeekStore.length - 1].e.getUTCMonth(), 3)
    t.equal(fridayWeekStore[fridayWeekStore.length - 1].e.getFullYear(), 2024)

    const thursdayWeekStoreLength = fridayWeekStore.length
    for (let i = 0; i < thursdayWeekStoreLength; i++) {
        const {s, e} = fridayWeekStore[i]
        t.equal(s.getFullYear() === e.getFullYear(), true)
        t.equal(s.getUTCMonth() === e.getUTCMonth(), true)
        t.equal(s.getDate() <= e.getDate(), true)
    }
})
