
function array(a,l) {
    let sum = 0

    for(let i = 0; i < l.length; i++)
    {
        if(l[i] % a[0] === 0 || l[i] % a[1] === 0){
            sum = sum + l[i]
        }
    }
    return sum
}

let a = [3, 5];
let l = [2,6,88,6,76,13,17]


let result = array(a,l)

alert("Sum : " + result);
