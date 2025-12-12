document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Simulação de login (pode substituir por API)
  if (user === "admin" && pass === "123") {
    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html"; // redirecione para o sistema
  } else {
    alert("Usuário ou senha incorretos!");
  }
});

