// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice (0, 2);

const returnLastTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
};
// console.log (createFareMultiplier(6)(5))

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
};
// console.log (fareDoubler(7))

const fareTripler = (fare) => createFareMultiplier(3)(fare);
// console.log (fareTripler(7))

const selectDifferentDrivers = (arrayOfDrivers, f) => {
    if (f === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (f === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}