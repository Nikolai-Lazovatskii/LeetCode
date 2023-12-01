var join = function(arr1, arr2) {
    const joinedArr = {};

    for (let key = 0; key < arr1.length; key++) {
        joinedArr[arr1[key].id] = arr1[key];
    }

    for (let key = 0; key < arr2.length; key++) {
        if (joinedArr[arr2[key].id]) {
            for (const el in arr2[key]) {
                joinedArr[arr2[key].id][el] = arr2[key][el];
            }
        } else {
            joinedArr[arr2[key].id] = arr2[key];
        }
    }
    return Object.values(joinedArr);
};
