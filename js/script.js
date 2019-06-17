//Fragenindex
n=-1;

//Fragen 0, 1, 2, ...
questions = ['Was gibt 1+1 ?', 'Was gibt 2+1 ?', 'Was gibt 7+7 ?','Was gibt 16+16?','Was gibt 17+17 ?'];

//Antworten 0, 1, 2, ... mit je zwei Möglichkeiten
answers = [['7', '2','3'], ['5', '3','15'], ['14', '16','27'], ['32','29','22'], ['22','19','34']];

//richtige Antworten (index)
correctAns = [1,1,0,0,2];

//vom Spieler gewählte Antworten (index). Standardmässig alle auf -1 setzen (-1 ist sicher falsch).
userAns = [-1,-1,-1,-1,-1];

//Punkte am Anfang auf 0 setzen
points = 0;

function init() {
	// führe startGame() aus, wenn auf "start" geklickt wird
	document.getElementById('start').addEventListener('click', startGame);
	//führe nextQuestion aus, wenn auf "next" geklickt wird
	document.getElementById('next').addEventListener('click', nextQuestion);
	//führe chooseX aus, wenn auf "ansX" geklickt wird
	document.getElementById('ans0').addEventListener('click', choose0);
	document.getElementById('ans1').addEventListener('click', choose1);
	document.getElementById('ans2').addEventListener('click', choose2);
}

function startGame() {
	//blende "start" aus und blende "question" und "next" ein
	document.getElementById('start').setAttribute('style', 'display: none;');
	document.getElementById('question').setAttribute('style', 'display: block;');
	document.getElementById('next').setAttribute('style', 'display: block;');
	//führe nextQuestion() aus
	nextQuestion();
}

function nextQuestion(){
	// falls die vorherige Antwort richtig ist, erhöhe Punkte um 1 (nur falls n>=0)
	if (userAns[n] == correctAns[n] && n>=0) {
		points = points + 1;
		document.getElementById('points').innerHTML = points + ' Punkte';
	}

	// erhöhe n um 1 (beim ersten Durchlauf wird n=0)
	n = n + 1;

	//blende alles aus, falls alle Fragen durchgespielt sind
	if (n == questions.length) {
		document.getElementById('question').setAttribute('style', 'display: none;');
		document.getElementById('ans0').setAttribute('style', 'display: none;');
		document.getElementById('ans1').setAttribute('style', 'display: none;');
		document.getElementById('ans2').setAttribute('style', 'display: none;');
		document.getElementById('next').setAttribute('style', 'display: none;');
	}

	//sonst setze Rahmen zurück auf schwarz und schreibe die neue Frage mit Antworten in die Container
	else {
		document.getElementById('ans0').setAttribute('style', 'display: block; border-color: black;');
		document.getElementById('ans1').setAttribute('style', 'display: block; border-color: black;');
		document.getElementById('ans2').setAttribute('style', 'display: block; border-color: black;');
		if (n < questions.length) {
			document.getElementById('question').innerHTML = questions[n];
			document.getElementById('ans0').innerHTML = answers[n][0];
			document.getElementById('ans1').innerHTML = answers[n][1];
			document.getElementById('ans2').innerHTML = answers[n][2];
		}
		if (n + 1 == questions.length) {
			document.getElementById('next').innerHTML = 'ENDE';
		}
	}
}

//wähle erste Antwort
function choose0() {
	//führe choose(ans) mit ans=0 aus
	choose(0);
}
//wähle zweite Antwort
function choose1() {
	//führe choose(ans) mit ans=1 aus
	choose(1);
}
function choose2() {
	choose(2)
}

//wähle Antwort
function choose(ans) {
	//setze alle Antwortrahmen auf schwarz
	document.getElementById('ans0').setAttribute('style', 'display: block; border-color: black;');
	document.getElementById('ans1').setAttribute('style', 'display: block; border-color: black;');
	document.getElementById('ans2').setAttribute('style', 'display: block; border-color: black;');

	//setze angeklickten Antwortrahmen auf rot und schreibe die gewählte Antwort in userAns[]
	if (ans==0){
		document.getElementById('ans0').setAttribute('style', 'display: block; border-color: red;');
		userAns[n] = 0;
	}
	else if (ans==2){
		document.getElementById('ans2').setAttribute('style', 'display: block; border-color: red;');
		userAns[n] = 2;
	}
	else {
		document.getElementById('ans1').setAttribute('style', 'display: block; border-color: red;');
		userAns[n] = 1;
	}
}