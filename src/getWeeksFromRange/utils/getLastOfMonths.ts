function getLastOfMonths(date: Date) {
    const innerDate = new Date(date)
    innerDate.setDate(1);
    innerDate.setMonth(date.getMonth() + 1);
    innerDate.setDate(0);
    innerDate.setHours(23);
    innerDate.setMinutes(0);
    innerDate.setSeconds(0);
    return innerDate;
}

export default getLastOfMonths
