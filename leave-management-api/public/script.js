// Function to apply for leave

const applyLeave = async () => {
  const employeeName = document.getElementById("name").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  // Basic validation
  if (!employeeName || !reason || !from || !to) {
    alert("❗ Please fill in all fields before submitting.");
    return;
  }

  try {
    const response = await fetch("/api/leaves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ employeeName, reason, from, to }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Leave request submitted!");
      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("reason").value = "";
      document.getElementById("from").value = "";
      document.getElementById("to").value = "";
      fetchLeaves(); // Refresh the leave list
    } else {
      alert(`❌ Error: ${result.message || "Unable to submit leave."}`);
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("⚠️ Network error. Please try again.");
  }
};

// Function to fetch and display all leave requests
const fetchLeaves = async () => {
  const leavesDiv = document.getElementById("leaves");
  leavesDiv.innerHTML = "<p>⏳ Loading...</p>";

  try {
    const response = await fetch("/api/leaves");
    const result = await response.json();

    leavesDiv.innerHTML = ""; 

    if (!result.data || result.data.length === 0) {
      leavesDiv.innerHTML = "<p>No leave requests found.</p>";
      return;
    }

    
    result.data.forEach((leave) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <strong>${leave.employeeName}</strong> requested <em>${leave.reason}</em> leave<br/>
        📅 From: ${leave.from} → ${leave.to}<br/>
        🟡 Status: <strong>${leave.status}</strong>
      `;
      leavesDiv.appendChild(card);
    });
  } catch (error) {
    console.error("Fetch error:", error);
    leavesDiv.innerHTML = "<p>⚠️ Failed to load leave data.</p>";
  }
};

// Load leave data when page loads
window.onload = fetchLeaves;
