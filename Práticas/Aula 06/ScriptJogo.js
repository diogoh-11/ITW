<script>
    /* Baralha as pe�as */
    function scramble(){ 
    var largura = window.innerWidth;
    var altura = window.innerHeight;



    /* Azul */


    azul.style.top = Math.floor(Math.random() * (altura - 80)).toString() + "px";
    azul.style.left = Math.floor(Math.random() * (largura - 80)).toString() + "px";
    console.log("Azul: " + azul.style.top + " / " + azul.style.left);


    /* Vermelho */


    vermelho.style.top = Math.floor(Math.random() * (altura - 80)).toString() + "px";
    vermelho.style.left = Math.floor(Math.random() * (largura - 80)).toString() + "px";
    console.log("Vermelho: " + vermelho.style.top + " / " + vermelho.style.left);


    /* Verde */


    verde.style.top = Math.floor(Math.random() * (altura - 80)).toString() + "px";
    verde.style.left = Math.floor(Math.random() * (largura - 80)).toString() + "px";
    console.log("Verde: " + verde.style.top + " / " + verde.style.left);


    /* Amarelo */


    amarelo.style.top = Math.floor(Math.random() * (altura - 80)).toString() + "px";
    amarelo.style.left = Math.floor(Math.random() * (largura - 80)).toString() + "px";
    console.log("Amarelo: " + amarelo.style.top + " / " + amarelo.style.left);
    }
    /* Deteta qual a pe�a que foi "tocada" */
    function setCurrentDiv() {


        //var x = event.target.tagName;


        document.getElementById("currentInfo").innerHTML = "<p>Ol�! Eu sou o " + event.target.id + "<br />" +
        "top: " + event.target.style.top + "<br>left: " + event.target.style.left + "</p>";
 }
    function clearSelected() {
        document.getElementById("currentInfo").innerText = "";
      }
    /* Quando o jogo come�a, baralha de imediato as pe�as */
    window.onload = scramble;
</script>
