//0 1 1 2 3 5 8 13
function fibs(num){
    if(num == 0){
        return [0];
    }
    else if(num == 1){
        return [1];
    }
    
    arr = [0,1];
    for(let i = 2;i<num;i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr;
}
//console.log(fibs(8));
function fibsRec(num) {
  //check base cases
  if (num < 1 || isNaN(num)) return "Please enter a valid number";
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const prevFib = fibsRec(num - 1); //only one recursive call per layer
      console.log(prevFib)

  const nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
  console.log(nextFib)
  return [...prevFib, nextFib]; // Spread the previous array and add the new number
}
// console.log(fibsRec(8))





//merge sort
function mergeSort(arr, left, right , mid){
    //take entire array and divide as evenly as possible
    //select left subarray and split (repeat)
    //left subarray of length 1 cannot be split -> indicates merge [end] [sort]
    //select right subarray and split (length 1 merge)
    //selected merged(sorted) left and right subarray and merge
    //selected smallest of both arrays
    if(arr.length ==0){
        return 'empty arr';
    }
    if(arr.length == 1){
        return arr;
    }

    mid = Math.ceil(arr.length/2);
    left = arr.slice(0,mid);
    right = arr.slice(mid);
   
    
}

function comboArr(left,right){
    let comboArr = []; 
    while(left.length!=0 || right.length!=0){
        if(left[0] == right[0]){
            comboArr.push(left.shift())
        }
        else if(left[0]<right[0]){
            comboArr.push(left.shift());
        }
        else if(right[0]<left[0]){
            comboArr.push(right.shift())
        }
        else if(left.length == 0){
            comboArr.push(right.shift())
        }
        else if(right.length == 0){

            comboArr.push(left.shift())
        }
    }
    return comboArr;
}
console.log(mergeSort([497,492,227,594,659,44,729,542]))

// console.log(comboArr([7,19,20,39,40,52,50],[2,13,16,39,60]))
// console.log(comboArr([5],[3]))
