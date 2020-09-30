/* eslint-disable no-unused-vars */
function binarySearch(array, value, start=0, end=array.length-1) {
  if(start>end) return -1;
  start=array.indexOf(value);
  let index=Math.floor((start+end)/2);
  let item=array[index];
  let bigDiff=0;
  let sellDay=null;
  if(item===value) {
    return index;
  }
  else if(item<value) {
    return binarySearch(array, value, index+1, end);
  }
  else if(item>value) {
    return binarySearch(array, value, start, index-1);
  }
};

function twoSum(nums, target) {
  const hashMap=new Map()
  //hashMap
  for(let i=0;i<nums.length;i++) {
    let complement=target+nums[i];
    hashMap.set(nums[i], i);
    // hashMap
    if(hashMap.has(complement)) {
      return [hashMap.get(complement), i]
    }
  }
};


function getGains(buyDay, arr) {
  let bigDiff=0;
  let count=0;
  if(arr.length<2) {return arr}
  if(!arr.indexOf(buyDay)) {return }
  if(buyDay<0) {return }
  let sellDay=null;
  let start=arr.indexOf(buyDay);

  for(let i=start+1;i<arr.length;i++) {
    count=count+1;
    let forward=arr[i];
    let currDiff=forward-buyDay;
    if(currDiff>bigDiff) {
      bigDiff=currDiff;
      sellDay=forward;
    }

  }
  console.log(sellDay, bigDiff, count);
}
function getGainsFaster(buyDay, arr) {
  let bigDiff=0;
  let count=0;
  if(arr.length<2) {return arr}
  if(!arr.indexOf(buyDay)) {return }
  if(buyDay<0) {return }
  let mutArr=arr.slice(arr.indexOf(buyDay));
  let sellDay=null;
  for(let i=1;i<mutArr.length;i++) {
    count=count+1;
    let forward=mutArr[i];
    let currDiff=forward-buyDay;
    if(currDiff>bigDiff) {
      bigDiff=currDiff;
      sellDay=forward;
    }

  }
  console.log(sellDay, bigDiff, count);
}
function getGainsFastest(buyDay, arr) {
  let count=0;
  if(arr.length<2) {return arr}
  if(!arr.indexOf(buyDay)) {return }
  if(buyDay<0) {return }
  let mutArr=arr.slice(arr.indexOf(buyDay));
  let morMutArr=mutArr.sort((a, b) => {return a-b})
  let sellDay=morMutArr[morMutArr.length-1]
  count=count+1;
  let bigDiff=sellDay-buyDay;
  console.log(sellDay, bigDiff, count);
}
const gainsArr=[128, 97, 121, 123, 98, 97, 105, 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
const day=3;
// getGains(day, gainsArr)
// getGainsFaster(day, gainsArr)
// getGainsFastest(day, gainsArr)


function eggDrop(start, drops, init) {
  let breaker=99;
  let floors=100;
  init=init===undefined? init=start-1:init-1;
  drops=drops===undefined? 0:drops;
  drops=drops+1;
  if(start===breaker) {return `Drops required ${drops}`}
  if(init<0) {init=2; eggDrop(start, drops)}
  if(start>floors) {start=start-floors; eggDrop(start, drops, init)}
  console.log(start, init, drops);
  if(start>breaker) {
    return eggDrop(start-1, drops)
  }
  else {
    let newStart=(start+init)
    newStart=newStart>floors? floors:newStart;
    return eggDrop(newStart, drops, init)
  }
}

console.log(eggDrop(14))
