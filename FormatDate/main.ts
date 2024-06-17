
function formatDate(userDate: string): string {
    const [month, day, year] = userDate.split("/");
    if (month == undefined || day == undefined || year == undefined) {
        throw new Error("invalid date format! \n Please use MM/DD/YYYY");
    }
    const formattedDate = `${year}${month.padEnd(2, "0")}${day.padStart(2, "0")}`;
    return formattedDate;
}

console.log(formatDate("12/31/2014"));