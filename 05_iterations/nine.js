const nums = [1,2,3]

const total = nums.reduce(function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)

console.log(total);
