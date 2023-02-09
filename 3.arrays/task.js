function compareArrays(arr1, arr2) {
    const compare = (arr1.length === arr2.length) && arr1.every((element, i) => element === arr2[i]);
    return compare;
}

function getUsersNamesInAgeRange(users, gender) {
    const filterByGender = users.filter(user => user.gender === gender);
    const initValue = 0;
    const averageAge = filterByGender.reduce(
        (accumulator, user) => accumulator + user.age,
        initValue
    ) / filterByGender.length;
    if (isNaN(averageAge)) {
        return 0;
    }
    return averageAge;
}