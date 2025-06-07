// Using async/await for the same logic

function checkOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = {
        id: orderId,
        status: "Shipped",
        estimatedDelivery: "2025-06-10"
      };
      resolve(order);
    }, 1000);
  });
}

// Async function to fetch order
async function getOrderStatus() {
  try {
    const result = await checkOrderStatus("ORD12345");
    console.log("Async/Await Version:");
    console.log(`Order ID: ${result.id}`);
    console.log(`Status: ${result.status}`);
    console.log(`Estimated Delivery: ${result.estimatedDelivery}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

getOrderStatus();
