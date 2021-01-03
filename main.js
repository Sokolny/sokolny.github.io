// Fragenkataglog

var fragenkatalog = [
	{	
		frage:"Was ist die Hauptstadt von Frankreich?", 
		antwort: ["Herne", "Timbuktu", "Paris", "Gorsleben"], 
		correctAnswer: "Paris"
	}, {
		frage:"Oko was?", 
		antwort: ["Nagan", "Lama", "Bogee", "Lahoma"], 
		correctAnswer: "Bogee"
	}, {
		frage:"Wie heißt eine Schwester von Alex?", 
		antwort: ["Elisa", "Annabelle", "Marie", "Theresa"], 
		correctAnswer: "Theresa"
	}
];



function getQuestion () {

	var i;

	for (i=0; i < fragenkatalog.length; i++) {

		var newElement = document.createElement("div");

		newElement.setAttribute("class", "frame-question");

			var newQuestion = document.createElement("h2");

			newQuestion.setAttribute("id", "question"+i);

			var questionText = document.createTextNode(fragenkatalog[i].frage);

			newQuestion.appendChild(questionText);

			newElement.appendChild(newQuestion)


			var newForm = document.createElement("form");

			newElement.appendChild(newForm);

			var j;

			for (j=0; j < fragenkatalog[i].antwort.length; j++) {

				var newRadio = document.createElement("input");

				newRadio.setAttribute("type", "radio");
				newRadio.setAttribute("name", "quiz");
				newRadio.setAttribute("class", "answer"+i);
				newRadio.setAttribute("id", "answer"+i+j);

				newForm.appendChild(newRadio);


				var newLabel = document.createElement("label");

				newLabel.setAttribute("for", "answer");
				newLabel.setAttribute("class", "label"+i);
				newLabel.setAttribute("id", "label"+i+j);

				var answerText = document.createTextNode(fragenkatalog[i].antwort[j]);

				newLabel.appendChild(answerText);

				newForm.appendChild(newLabel);

				var newBreak = document.createElement("br");

				newForm.appendChild(newBreak);

			}


		document.body.insertBefore(newElement, document.getElementById("box"));

	}
	

}

getQuestion ()


// Richtige Antwort


document.getElementById("sumbit").onclick=function() {

	var i;
	var j;

	var counter = 0

	for(i=0; i< fragenkatalog.length; i++) {

		var buttonCheck = document.getElementsByClassName("answer"+i);

		for (j=0; j < buttonCheck.length; j++) {

			if (buttonCheck[j].checked)
				counter++;		
		}


	}

	if (counter!=fragenkatalog.length) {
		alert("Da hast du wohl eine Frage übersehen! Erst wenn du alles beantwortet hast, geht es weiter.")
	}

	else {


		for (i=0; i < fragenkatalog.length; i++) {

			var pickRadio = document.getElementsByClassName("answer"+i);
			var pickLabel = document.getElementsByClassName("label"+i);

			for (j=0; j < pickRadio.length; j++) {

			document.getElementById(pickLabel[j].id).style.backgroundColor="#33B3FF";
			document.getElementById(pickLabel[j].id).style.color="black";

			}

		}

		for (i=0; i < fragenkatalog.length; i++) {

			var pickRadio = document.getElementsByClassName("answer"+i);
			var pickLabel = document.getElementsByClassName("label"+i);

			for (j=0; j < pickRadio.length; j++) {


				if (pickRadio[j].checked && pickLabel[j].innerHTML==fragenkatalog[i].correctAnswer) {

					document.getElementById(pickLabel[j].id).style.backgroundColor="green";
					document.getElementById(pickLabel[j].id).style.color="white";
				}

				if (pickRadio[j].checked && pickLabel[j].innerHTML!=fragenkatalog[i].correctAnswer) {

					document.getElementById(pickLabel[j].id).style.backgroundColor="red";
					document.getElementById(pickLabel[j].id).style.color="white";
				}
			}

		}
	}
}