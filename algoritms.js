/*Native JS -_-*/

//factorial 
function factorial(n) {
    if (n === 0) {
        return 0;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(3));

//fibonachi
function fib(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2 || n === 3) {
        return 1;
    }
    let a = 1;
    let b = 1;
    let c = 0;
    for (let i = 4; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fib(4));

//reverse

function reverse(el) {
    let arr = [];
    let test = el.split('');
    for (let i = test.length - 1; i >= 0; i--) {
        arr.push(test[i]);
    }
    return arr.join('');
}
console.log(reverse('abcd'));

//prime number
function primeNumber(n) {
    if (n < 2) {
        return false;
    }
    let flag = true;
    for (let i = n - 1; i > 1; i--) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }

    return flag;
}

console.log(primeNumber(17));

//isSorted

function isSorted(arr){
    for(let j = 0; j < arr.length; j++){
        for(let i = j; i < arr.length; i++){
            if(arr[i] < arr[j]){
                return false;
            }
        }
    }
    return true;
}
console.log(isSorted([-Infinity, null, 1, 3, 4, 5, 6]));
console.log(isSorted([-Infinity, null, 1, 3, 4, 5, 1]));

//Polindrom

function polindrom(el){
    return el.toLowerCase().split('').join('') === el.toLowerCase().split('').reverse().join('')
}

console.log(polindrom('ABaBa'));

//IndexOf
function indexOf(arr, findEl){
    let flag = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === findEl){
            return i;
        }
    }
    return flag;
}

console.log(indexOf([1, 2, 3, 4], 1));

// missing
function missing(el){
    let flag = false;
    let arr = el.sort((a, b) => {
        return a - b;
    });
    let arrTest = [];
    let result = [];
    let theBigestNum = arr[arr.length-1];
    for(let i = 1; i <= theBigestNum; i++){
        arrTest.push(i);
    }
    for(let i = 0; i < arrTest.length; i++){
            for(let j = 0; j < arrTest.length; j++){
                if(arr[j] === arrTest[i]){
                    flag = true;
                }
            }
            if(!flag){
                result.push(arrTest[i]);
            }
            flag = false;
    }
    if(result.length === 0){
        return undefined;
    }   
    return result;
}

console.log(missing([2, 5, 6]), missing([]));

//Balanced

function isBalanced(el){
    const arr = el.split('');
    
    let nextLeft = true;
    let isLeft = 0;
    let isRight = 0;
    let counterLeft = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '{'){
            if(counterLeft === 0){
                counterLeft++;
                nextLeft = true;
                isLeft++;
            } else if(counterLeft > 0){
                nextLeft = false;
                isLeft++;
            }
            
        }
        if(arr[i] === '}'){
            if(nextLeft){
                return false;
            } else {
                isRight++;
            }
        }        
    }

    return isLeft === isRight;
}

console.log(isBalanced('{}{}'));