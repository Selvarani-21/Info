function array(a,b,n) {
    let sum = 0

    for(let i = 0; i < n.length; i++)
    {
        if(n[i] % a === 0 || n[i] % b === 0){
            sum = sum + n[i]
        }
    }
    return sum
}

let a = 5
let b = 8
let x = [2,4,66,8,67,18,16]

let result = array(a, b, x);

alert("Sum : "+ result); 