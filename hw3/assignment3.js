

// forEach

let testArr = [1,2,3]

function callbackFunc(item, index, array){
  
    console.log(item, index, array)
  
}
  
  
Array.prototype.forEach = function(callbackFunc){
  
    let arr = this;
    
    for(let i=0; i < arr.length; i++){
    
      callbackFunc(arr[i], i, arr)
    
    }
  
  }

arr.forEach(callbackFunc)


//map

function cb(item, index, array){
  
    return [item*item, index, array]

  
}


Array.prototype.map = function(cb){

    let newArr = [];

    for(let i=0; i < this.length; i++){
    
        newArr.push(cb(this[i], i, this))

      }

    return newArr

}

console.log(testArr.map(cb))



//filter

let testArr2 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let testArr3 = ["Stephen", "Patrick", "Mike", "Jason", "Mark"]

function cb2(item, index, array){

    return item > 3
  
}

function cb3(item, index, array){

    return item[0] === "M"
  
}

Array.prototype.filter = function(cb){

    let newArr = [];

    for(let i=0; i < this.length; i++){

        if(cb(this[i], i, this)) newArr.push(this[i])

    }

    return newArr

}

console.log(testArr2.filter(cb2))
console.log(testArr3.filter(cb3))


//reduce

let testArray4 = [15, 16, 17, 18, 19];

function cb4(previousValue, currentValue, currentIndex, array){
    const returns = previousValue + currentValue;
    console.log(`previous: ${previousValue}, current: ${currentValue}, index: ${currentIndex}, returns: ${returns}`);
    return returns;
}

let testArray5 = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

function cb5(tally, fruit){
    tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
}

let testArray6 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function cb6(total, amount){

    return total.concat(amount);

}

Array.prototype.reduce = function(cb, initialValue = 0){

    let returnNum;

    for(let i=0; i < this.length; i++){
        
        if(i===0) {
            let output = cb(initialValue, this[i], i, this);

            returnNum = output
            
        }else{
            let output = cb(returnNum, this[i], i, this)

            returnNum = output
        }
    

    }

    return returnNum

}


console.log(testArray4.reduce(cb4, 5))

console.log(testArray5.reduce(cb5,{}))

console.log(testArray6.reduce(cb6, []))



//some

let testArr7 = [1, 3, 5];

function cb7(element, index, array){
    return element % 2 === 0;
}

Array.prototype.some = function(cb){

    if(this.length ===0) return false;

    for(let i=0; i < this.length; i++){
        if(cb(this[i], i, this)) return true;
    }

    return false;


}


console.log(testArr7.some(cb7))


//every

let testArr8 = [2,4,6,8,10,11]

function cb8(element, index, array){
    return element % 2 === 0;
}

Array.prototype.every = function(cb){

    if(this.length ===0) return true;

    for(let i=0; i < this.length; i++){
        if(!cb(this[i], i, this)) return false;
    }

    return true;


}

console.log(testArr8.every(cb8))