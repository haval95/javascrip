'use strict';

// let hasDriverLicense = true;
// const passTest = true;

// if (passTest) hasDriverLicensee = true;

// if (hasDriverLicense) console.log(hasDriverLicense);

function logger() {
  console.log('my name is haval');
}

logger();

const nums = [1, 2, 3, 4, 5];
const nums1 = [1, 2, 3, 4, 5, ...nums];

console.log(nums1);

const obj = {
  fname: 'haval',
  birthday: 1995,
  calcAge: function () {
    return 2024 - this.birthday;
  },
};

console.log(obj['calcAge']);

if (x === 2) console.log('hi');
