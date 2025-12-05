async function mostraParola() {
    const parola = document.getElementById("inputParola").value;

    await fetch("https://nome-tuo-backend.onrender.com/parola", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parola })
    });

    document.getElementById("risultato").textContent =
        "Parola inviata al server Render!";
}
