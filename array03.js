
const x = [49, 8, 6, 9]; 
const y = [8,6,5,4,9,7,2]; 

function total() {
    let sum = 0;

    alert('Success');
    for (let i = 0; i < y.length; i++) {
        let num = l[i];
        for (let y = 0; j < x.length; j++) {
            if (num % x[j] === 0) {
                sum += num; 
                break; 
            }
        }
    }
    
}
alert('Sum of multiples: ' +sum);
