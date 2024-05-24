const nums = [23, 82, 183, 274, 9, 24 ];

for(let i=0; i<nums.length; i++){
    console.log(nums[i] ** 2);
}

let num = [23, 45, 92, 54, 78, 37];

for (let i=0; i<num.length;i++) {
    console.log(num[i] ** 2);
}

for( let a of nums ){
    console.log(a ** 2);
}

nums.forEach( (n) => {console.log(n);} );

// add square of all elements of nums in a new array

const newNums = [];
for(let a of nums ){
    newNums.push(a**2)
}

console.log(newNums);
