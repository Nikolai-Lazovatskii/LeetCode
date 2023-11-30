var twoSum = function(nums, target) {
    let including = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remaind = target - nums[i];
        if (including.has(remaind)) {
            return [including.get(remaind), i];
        }
        including.set(nums[i], i);
    }
};
