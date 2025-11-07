function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Trocar imagem do perfil se quiser mudar junto
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png") // pode trocar se quiser um outro avatar claro
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
