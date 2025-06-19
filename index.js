document.getElementById("skillForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const offer = document.getElementById("offer").value;
  const want = document.getElementById("want").value;

  if (!name || !offer || !want) {
    alert("Please fill out all fields!");
    return;
  }

  const table = document.getElementById("skillTable");
  const newRow = table.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = name;
  cell2.textContent = offer;
  cell3.textContent = want;

  const feedback = document.getElementById("feedback");
  feedback.textContent = `✅ ${name}, your skill request has been posted!`;
  feedback.style.opacity = "1";

  document.getElementById("skillForm").reset();
feedback.textContent += " Your response has been collected.";    
  setTimeout(() => {
    feedback.style.opacity = "0";
    feedback.textContent = " thank you for your request!";
  }, 10000);
});
