const Bill = document.querySelector(".Bill");
const eventType= "onclick"

function controlFunction(){
    alert("William Felton «Bill» Russell (Monroe, Luisiana; 12 de febrero de 1934 - Mercer Island, Washington; 31 de julio de 20221​) fue un baloncestista estadounidense que disputó trece temporadas en los Boston Celtics de la NBA. Con 2,08 metros de altura, jugaba en la posición de pívot. Fue el máximo estandarte de la dinastía de los Celtics que ganaron once campeonatos en trece años y en ese lapso disputaron diez finales consecutivas (logrando ocho títulos consecutivos). Fue en cinco ocasiones nombrado MVP de la temporada, cuatro veces máximo reboteador del año, aunque extrañamente solamente figuró en tres ocasiones en el mejor quinteto de la NBA, a las que se agregan otras ocho apariciones en el segundo quinteto.")
}
const eventListener= Bill.addEventListener(eventType, controlFunction);


function LeBronJames(obj) {
    obj.innerHTML = "LeBronJames"
  }

  function MJ(obj) {
    obj.innerHTML = "MJ"
  }

  function Kobe(obj) {
    obj.innerHTML = "Kobe"
  }

  function Bird(obj) {
    obj.innerHTML = "Larry"
  }