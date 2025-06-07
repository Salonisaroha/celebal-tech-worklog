// Simulates checking order status using a callback function

function checkOrderStatus(orderId, callback){
    // Simulate API delay
    setTimeout(()=>{
       const order = {
        id : orderId,
        status : "shipped",
        estimatedDelivery : "2025-06-10"
    };
    callback(null, order);
    }, 1000);
   
}

// call the function
checkOrderStatus("ORD12345", (err, result)=>{
    if(err){
        console.error("Error fetching order status :", err);
    } else{
        console.log("Callback Version:");
        console.log(`Order ID : ${result.id}` );
        console.log(`Status : ${result.status}` );
        console.log(`Estimated Delivery : ${result.estimatedDelivery}` )
    }
});