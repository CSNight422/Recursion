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
let sort = [];
function mergeSort(arr){
    console.log('Recusion')
    if(arr.length == 0){
        return 'No elements in array'
    }
    if(arr.length ==1){
        return arr[0]
    }
    if(arr.length ==2){
        //now sort/find larger/smaller of 2 numbers
        if(arr[0]==arr[1]){
            return [arr[0],arr[1]]
        }
        else if(arr[0]>arr[1]){
            return [arr[1],arr[0]]
        }
        else{
            return [arr[0],arr[1]]
        }
    }
    //get half length of array
    //split in half
    //take left - get half length of array - get new left and new right - continue till arr.length = 0/1/2
    //take left and compare values return
    //take right and compare values return
    //take FIRST RIGHT SIDE
    //repeate above till return values
    let half_length = Math.ceil(arr.length/2);
    let leftSide = mergeSort(arr.slice(0,half_length));
    let rightSide = mergeSort(arr.slice(half_length));
    return [leftSide, rightSide]


}
console.log(mergeSort([22,16,19,7,8,3,50,100]))