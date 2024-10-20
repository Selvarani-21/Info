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
price = {apple:1.50,oran:4.50,grapes:3.0,tea:12,milk:60};
alert(f1(basket,price));