alert("Euler Task 01");
X=3;
Y=5;
Z=1000;

let sum=0;

for(let i=0; i<Z;i++){
    if(i%3 == 0 || i%5==0){
        sum += i;
    }
}
alert("sum of multiples of 3 or 5 :"+sum);