function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>
  
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s" >
          <h2>${date}<span>${day}</span></h2>
          <ul>                  
             ${games}
          </ul>
      </div>
`
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "irã") +
      createGame("holanda", "13:00", "senegal") +
      createGame("paisdegales", "16:00", "eua")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabiasaudita") +
      createGame("tunísia", "10:00", "dinamarca") +
      createGame("mexico", "13:00", "polonia") +
      createGame("frança", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japão") +
      createGame("espanha", "13:00", "costarica") +
      createGame("belgica", "16:00", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "coreiadosul") +
      createGame("portugal", "13:00", "gana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("paisdegales", "07:00", "irã") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "eua")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "07:00", "australia") +
      createGame("polonia", "10:00", "arabiasaudita") +
      createGame("frança", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costarica") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canadá") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "Serbia") +
      createGame("coreiadosul", "10:00", "gana") +
      createGame("Brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "catar") +
      createGame("irã", "16:00", "eua") +
      createGame("inglaterra", "16:00", "paisdegales")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "12:00", "frança") +
      createGame("australia", "12:00", "dinamarca") +
      createGame("polonia", "16:00", "argentina") +
      createGame("arabiasaudita", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croacia", "12:00", "belgica") +
      createGame("canadá", "12:00", "marrocos") +
      createGame("japão", "16:00", "espanha") +
      createGame("costarica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreiadosul", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("switzerland", "16:00", "Serbia") +
      createGame("cameroon", "16:00", "Brazil")
  ) 
