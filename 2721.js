var promiseAll = function(functions) {
    return Promise.all(functions.map((func) => func()))
};
