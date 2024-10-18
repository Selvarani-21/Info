let f1 = (basket,prices)=>{
    let totalCost = 0;
    for(let item in basket){
        if(prices[item] != undefined){
            totalCost += basket[item] * prices[item];
        }
    }
    return totalCost;
}
basket = {apple:1,oran:1,grapes:6};
price = {apple:2.50,oran:3.50,grapes:5.0,tea:10,milk:50};
alert(f1(basket,price));