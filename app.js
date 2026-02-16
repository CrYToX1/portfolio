// 1. Najdeme místo v HTML, kam chceme data vložit
const profilDiv = document.getElementById("profile");

// 2. Načteme JSON soubor
fetch("./profile.json")
  .then(response => {
    // Kontrola, jestli soubor vůbec existuje
    if (!response.ok) {
      throw new Error("Nepodařilo se načíst profile.json");
    }
    return response.json();
  })
  .then(data => {
    profilDiv.innerHTML = `
      <h1>${data.jmeno}</h1>

      <p><strong>Zájmy:</strong></p>
      <ul>
        ${data.zajmy.map(zajem => `<li>${zajem}</li>`).join("")}
      </ul>
      <p><strong>Dovednosti:</strong></p>
      <ul>
        ${data.dovednosti.map(dovednost => `<li>${dovednost}</li>`).join("")}
      </ul>
    `;
  })
  .catch(err => {
    console.error("Chyba:", err);
    profilDiv.innerHTML = `
      <p class="error">Profil nenacten</p>
      <p>Zkus zkontrolovat, jestli soubor profil.json existuje ve stejné složce.</p>
    `;
  });