// Same function but now returns a Promise

function checkOrderStatus(orderId){
return new promise((resolve, reject)=>{
    setTimeout(()=>{
        const order = {
            id: orderId,
            status : "Shipped",
            estimatedDelivery : "2025-06-10"
        };
        resolve(order);
    }, 1000);
});
}

// Using .then() and .catch()
checkOrderStatus("ORD12345")
.then(result=>{
    console.log("Promise Version : ");
     console.log(`Order ID: ${result.id}`);
    console.log(`Status: ${result.status}`);
    console.log(`Estimated Delivery: ${result.estimatedDelivery}`);
})
.catch(err =>{
    console.log("Error", err);
});