var compactObject = function(obj) {
    function checkElements(obj) {
        if (!obj) return false
        if (typeof(obj) !== "object") return obj
        if (Array.isArray(obj)) {
            const newArr = []
            for (let i = 0; i < obj.length; i++) {
                let res = checkElements(obj[i])
                if (res) {
                    newArr.push(res)
                }
            }
            return newArr;
        }

        const newObj = {}

        for (const key in obj) {
            const res = checkElements(obj[key])
            if (res) {
                newObj[key] = res
            }
        }
        return newObj;
    }
    return checkElements(obj)
};
