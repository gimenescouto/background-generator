var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const buttons = document.querySelector(".direction")
var buttonsNode = document.getElementsByTagName("button");
var directionButton = "right"
var targetAntigo = ""

/*var direc = ""*/

function clearShadow () {
	for (i=0; i<buttonsNode.length; i++) {
		buttonsNode[i].classList.remove("shadow");
	}
}

function setDirection (e) {

	clearShadow ()


	if (e.target.className ==="button" || "BUTTON" /*!== "direction"*/) { /*??????????? e porque seleciona o div direction?*/
        /*console.log(e.target.value);
        console.log(e.path[0].value);*/
        console.log(e.target)
        directionButton = e.target.value; /*pq nao posso definir a var dentro da funcao?*/
        e.target.classList.add("shadow");
         
        /*console.log(directionButton);*/
    }
    setGradient()

}

function setGradient () {

	body.style.background = "linear-gradient(to "
	+directionButton
	+", "
	+color1.value
	+" , "
	+color2.value
	+")";
	css.textContent = body.style.background + ";";
}


buttons.addEventListener("click", setDirection)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
