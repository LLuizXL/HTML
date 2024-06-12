trocaTema = () => {
  //   const html = document.documentElement;

  //   document.querySelector("body").style.background = "lightpink"; //Ele troca o background da página do item body do html para a cor desejada.
  document.documentElement.classList.toggle("light"); //Procurá o documetno base (body)

  const isLight = document.documentElement.classList.contains("light"); //Uma variável booleana, true e false

  const imagem = isLight ? "./img/hqdefault.jpg" : "./img/flightReacts.png";

  document.querySelector("#profile img").setAttribute("src", imagem);

  if (isLight) {
    document
      .querySelector("#profile img")
      .setAttribute(
        "alt",
        "Bob esponja sentado em seu sofá enquanto observa o pote de rações do Gary, junto com um semblante triste, quase chorando."
      );
  } else {
    document
      .querySelector("#profile img")
      .setAttribute(
        "alt",
        "Imagem de perfil de uma pessoa fazendo careta com a língua para fora com uma expressão de humor, sentado em uma cadeira gamer azul e preta"
      );
  }
};
