function isDateValid(date){
    return !Number.isNaN(new Date(date).valueOf());
}

console.log(isDateValid("02-31-2021"));