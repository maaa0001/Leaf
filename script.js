document.addEventListener("DOMContentLoaded", () => {
  const claimsData = [
    {
      id: "#001",
      name: "Fire in warehouse",
      description: "We had a fire in one of our warehouses.",
      documents: ["picture01.jpg", "dokument.txt"],
      status: "In review",
    },
    {
      id: "#002",
      name: "obbery",
      description: "We had a robbery in one of our warehouses...",
      documents: ["update-log.txt"],
      status: "Draft",
    },
  ];

  const tableBody = document.getElementById("claimsTable");

  function loadClaims() {
    claimsData.forEach((claim) => {
      const row = document.createElement("tr");

      // Bestem klasse til status
      let statusClass = "";
      if (claim.status === "Draft") {
        statusClass = "draft";
      } else if (claim.status === "In review") {
        statusClass = "in-review";
      }

      row.innerHTML = `
              <td>${claim.id}</td>
              <td>${claim.name}</td>
              <td>${claim.description}</td>
              <td>${claim.documents.map((doc) => `<a href="#">${doc}</a>`).join(", ")}</td>
              <td><span class="status ${statusClass}">${claim.status}</span></td>
          `;

      tableBody.appendChild(row);
    });
  }

  loadClaims();
});
