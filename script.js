function toggleMode() {
  const html = document.documentElement

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar_light.jpg")
  } else {
    // se tiver sem light mode, manter a imagem original
    img.setAttribute("src", "./assets/avatar.jpeg")
  }

  //pegar a tag alt
  const alt = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tver light mode, adicionar a imagem light
    alt.setAttribute("alt", "Filipe de óculos")
  } else {
    // se tiver sem light mode, manter a imagem original
    alt.setAttribute("alt", "Filipe sem óculos")
  }
}
