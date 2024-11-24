document.addEventListener("DOMContentLoaded", () => {
  const claimsData = [
    {
      id: "#001",
      name: "Fire in warehouse",
      description: "We had a fire in one of our warehouses...",
      documents: ["picture01.jpg", "dokument.txt"],
      status: "In review",
    },
  ];

  const tableBody = document.getElementById("claimsTable");

  function loadClaims() {
    claimsData.forEach((claim) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${claim.id}</td>
                <td>${claim.name}</td>
                <td>${claim.description}</td>
                <td>${claim.documents.map((doc) => `<a href="#">${doc}</a>`).join(", ")}</td>
                <td><span class="status">${claim.status}</span></td>
            `;

      tableBody.appendChild(row);
    });
  }

  loadClaims();
});
