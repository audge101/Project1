
let setInt1, setInt2, setInt3, firstTimeout, secondTimeout, thirdTimeout, secsRoundMarg






$( () => {

userPoints = 0;



let randomQuestion, currentQuestionIndex
let secsRound1 = 8;
let secsRound2 = 15;
let secsRound3 = 22;
let secsRoundMarg = 5;
let secsRoundOf = 4;
let secsRoundMan = 4;
let secsDiv9 = 4;
let secsDiv10 = 4;
let secsDiv11 = 4;
let secsDiv12 = 4;
let secsDiv13 = 4;
let secsDiv14 = 4;
let secsDiv15 = 4;
let secsDiv16 = 4;


const audioContainer = document.getElementById("audioContainer"); 
const questionElementId = document.getElementById('question')
const answerButtonsGrid = document.getElementById('answerSelections')
const nextButton = document.getElementById('nextButtonQuiz')
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	nextQuestion()
})

const containerEl = document.getElementById('container');
const $countdown2 = document.getElementById('countdown2');
const $countdown1 = document.getElementById('countdown1');
const $countdown3 = document.getElementById('countdown3');
const $countdown4 = document.getElementById('countdown4');
const $countdown5 = document.getElementById('countdown5');
const $countdown6 = document.getElementById('countdown6');
const $countdown7 = document.getElementById('countdown7');
const $countdown8 = document.getElementById('countdown8');
const $countdown9 = document.getElementById('countdown9');
const $countdown10 = document.getElementById('countdown10');
const $countdown11 = document.getElementById('countdown11');
const $countdown12 = document.getElementById('countdown12');
const $countdown13 = document.getElementById('countdown13');
const $countdown14 = document.getElementById('countdown14');
const $div7 = document.getElementById('div7');
const $div6 = document.getElementById('div6');
const $div8 = document.getElementById('div8');
const $div9 = document.getElementById('div9');
const $div10 = document.getElementById('div10');
const $div11 = document.getElementById('div11');
const $div12 = document.getElementById('div12');
const $div13 = document.getElementById('div13');
const $div14 = document.getElementById('div14');
const $div15 = document.getElementById('div15');
const $div16 = document.getElementById('div16');
const $div4 = $('.div4');
const $div3 = $('.div3');
const $div1 = $('.div1');
const $modal = $('#modal');
const $closeBtn = $('#close');


const questionsRound1 = [
	{
		question: 'When a cocktail is served up, how is it served?',
		answers: [
			{ text: 'served with the zest of a citus fruit', isCorrect: false},
			{ text: 'served straight from the bottle to the glass', isCorrect: false},
			{ text: 'shaken or stirred and then strained through ice into a cocktail glass', isCorrect: true},
			{ text: 'served over ice', isCorrect: false}
		]
	},
	{
		question: 'What about a drink served on the rocks?',
		answers: [
			{ text: 'served straight from the bottle to the glass', isCorrect: false},
			{ text: 'served over ice', isCorrect: true},
			{ text: 'shaken or stirred and then strained through ice into a cocktail glass', isCorrect: false},
			{ text: 'served with the zest of a citus fruit', isCorrect: false}
		]
	},
	{
		question: 'When a drink is served neat, how is it served?',
		answers: [
		{ text: 'shaken or stirred and then strained through ice into a cocktail glass', isCorrect: false},
		{ text: 'served with the zest of a citus fruit', isCorrect: false},
		{ text: 'served over ice', isCorrect: false},
		{ text: 'served straight from the bottle to the glass', isCorrect: true}
		]
	}
]

const questionRound2 = [
	{
		question: 'How do you make a margarita?',
		answers: [
			{ text: 'salt rim\n2 oz. tequila\n1 oz. triple sec\n2 oz. sour mix\nshake and strain\nlime garnish', isCorrect: false},
			{ text: 'salt rim\n1 oz. tequila\n1/2 oz. triple sec\n2 oz. sour mix\nshake and strain\nlime garnish', isCorrect: true},
			{ text: 'salt rim\n2 oz. rum\n1 oz. blue curacao\n1oz sour mix\nstir\nlemon garnish', isCorrect: false},
			{ text: 'salt rim\n1 oz. tequila\n3/4 oz. triple sec\n1 oz. sour mix\nshake and strain\nlime garnish', isCorrect:false}
		]
	}
]


const questionRound3 = [
	{
		question: 'What is the correct order for preparing an old fashioned cocktail?',
		answers: [
			{ text: '1 oz. whiskey or bourbin\n1 sugar cube\nsplash of club soda\nmuddle\n1 large ice cube\n2 dashes Angostura bitters\nstir & add twist of lemon rind', isCorrect: false},
			{ text: 'splash of club soda\n2 oz. whiskey or bourbin\n2 dashes Angostura bitters\n1 sugar cube\nmuddle\n1 large ice cube\nstir & add twist of lemon rind', isCorrect: false},
			{ text: '1 sugar cube\n2 oz whiskey or bourbin\nsplash of club soda\n2 dashes Angostura bitters\nmuddle\n1 large ice cube\nstir & add twist of lemon rind', isCorrect: false},
			{ text: '1 sugar cube\n2 dashes Angostura bitters\nsplash of club soda\nmuddle\n1 large ice cube\n2 oz. rye or bourbin\nstir & add twist of lemon rind', isCorrect: true},
		]
	}
]


const questionRound4 = [
	{
		question: 'How do you prepare a "perfect Manhattan"?',
		answers: [
			{ text: 'dash of sweet vermouth\n2oz Scotch Whiskey\ncherry garnish', isCorrect: false},
			{ text: 'dash of sweet vermouth and dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: true},
			{ text: 'dash of dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: false},
			{ text: 'dash of sweet vermouth\n2oz whiskey\ncherry garnish', isCorrect: false},
		]
	},
	{
		question: 'How do you prepare a classic Manhattan cocktail?',
		answers: [
			{ text: 'dash of sweet vermouth\n2oz Scotch Whiskey\ncherry garnish', isCorrect: false},
			{ text: 'dash of sweet vermouth and dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: false},
			{ text: 'dash of dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: false},
			{ text: 'dash of sweet vermouth\n2oz whiskey\ncherry garnish', isCorrect: true},
		]
	},
	{
		question: 'How do you prepare a dry Manhattan?',
		answers: [
			{ text: 'dash of sweet vermouth\n2oz Scotch Whiskey\ncherry garnish', isCorrect: false},
			{ text: 'dash of sweet vermouth and dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: false},
			{ text: 'dash of dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: true},
			{ text: 'dash of sweet vermouth\n2oz whiskey\ncherry garnish', isCorrect: false},
		]
	},
	{
		question: 'How is a Rob Roy prepared?',
		answers: [
			{ text: 'dash of sweet vermouth\n2oz Scotch Whiskey\ncherry garnish', isCorrect: true},
			{ text: 'dash of sweet vermouth and dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: false},
			{ text: 'dash of dry vermouth\n2 oz. whiskey\nlemon twist', isCorrect: false},
			{ text: 'dash of sweet vermouth\n2oz whiskey\ncherry garnish', isCorrect: false},
		]
	}
]






const startMultipleChoice = () => {
	randomQuestion = questionsRound1.sort(() => Math.random() - .5);
	currentQuestionIndex = 0
	containerEl.classList.remove('hideThis')
	nextQuestion()
}




const nextQuestion = () => {
	resetQuestion()
	showCurrentQuestion(randomQuestion[currentQuestionIndex])
}


const showCurrentQuestion = (question) => {
	questionElementId.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect) {
			button.dataset.isCorrect = answer.isCorrect
			
		}
		button.addEventListener('click', selectedAnswer)
		answerButtonsGrid.appendChild(button)
		})
}




const resetQuestion = () => {
	nextButton.classList.add('hideThis')
	while (answerButtonsGrid.firstChild) {
		answerButtonsGrid.removeChild(answerButtonsGrid.firstChild)
	}
}



const selectedAnswer = (e) => {
	let selectedButton = e.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid.children).forEach(button => {
		setStatus(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hideThis')
	} else {
		nextButton.classList.add('hideThis')
		console.log(userPoints)
		setTimeout( function() {
			showDiv6()
		}, 1000)
	}
}



const setStatus = (element, isCorrect) => {
	clearStatus(element)
	if(isCorrect) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

const clearStatus = (element) => {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


const showDiv3 = () => {
	setTimeout( function(){
    $div3.css('visibility','visible');
       },3000)
}


const showDiv6 = () => {
	containerEl.classList.add('hideThis')
	$div6.classList.remove('hideThis')
	setInterval(updateCountdownMarg, 1000)
	updateCountdownMarg()
	setTimeout( function() {
			clearInterval(updateCountdownMarg)
		}, 6000)
	setTimeout( function() {
			$div6.classList.add('hideThis')
		}, 6000)
	setTimeout( function() {
			startMultipleChoiceRd2()
		}, 6000)
}



const showDiv7 = () => {
	setTimeout( function() {
			containerEl.classList.add('hideThis');
		}, 150)
	setTimeout( function() {
			$div7.classList.remove('hideThis');
		}, 150)
	setInterval(updateCountdownOldFashioned, 1000)
	updateCountdownOldFashioned()
	setTimeout( function() {
			clearInterval(updateCountdownOldFashioned)
		}, 6000)
	setTimeout( function() {
			$div7.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			startMultipleChoiceRd3()
		}, 5000)
}






const startMultipleChoiceRd4 = () => {
	randomQuestion = questionRound4.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl.classList.remove('hideThis')
	nextQuestion4()
}

const nextQuestion4 = () => {
	resetQuestion4()
	showCurrentQuestion4(randomQuestion[currentQuestionIndex])
}


const showCurrentQuestion4 = (question) => {
	questionElementId.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect) {
			button.dataset.isCorrect = answer.isCorrect
			
		}
		button.addEventListener('click', selectedAnswer4)
		answerButtonsGrid.appendChild(button)
		})
}

const resetQuestion4 = () => {
	nextButton.classList.add('hideThis')
	while (answerButtonsGrid.firstChild) {
		answerButtonsGrid.removeChild(answerButtonsGrid.firstChild)
	}
}


const selectedAnswer4 = (newEl2) => {
	let selectedButton = newEl2.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid.children).forEach(button => {
		setStatus4(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hideThis')
	} else {
		nextButton.classList.add('hideThis')
		setTimeout( function() {
			console.log(userPoints)
			showDiv12()
		}, 1000)
		
	}
}

const setStatus4 = (newElement2, isCorrect) => {
	clearStatus(newElement2)
	if(isCorrect) {
		newElement2.classList.add('correct')
	} else {
		newElement2.classList.add('wrong')
	}
}

const clearStatus4 = (newElement2) => {
	newElement2.classList.remove('correct')
	newElement2.classList.remove('wrong')
}


const showDiv8 = () => {
	containerEl.classList.add('hideThis')
	$div8.classList.remove('hideThis')
	setInterval(updateCountdownDiv8, 1000)
	updateCountdownDiv8()
	setTimeout( function() {
			clearInterval(updateCountdownDiv8)
		}, 5000)
	setTimeout( function() {
			$div8.classList.add('hideThis')
		}, 4000)
	setTimeout( function() {
			showDiv9()
		}, 4000)
}

const showDiv9 = () => {
	$div9.classList.remove('hideThis')
	setInterval(updateCountdownDiv9, 1000)
	updateCountdownDiv9()
	setTimeout( function() {
			clearInterval(updateCountdownDiv9)
		}, 5000)
	setTimeout( function() {
			$div9.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			showDiv10()
		}, 5000)
}


const showDiv10 = () => {
	$div10.classList.remove('hideThis')
	setInterval(updateCountdownDiv10, 1000)
	updateCountdownDiv10()
	setTimeout( function() {
			clearInterval(updateCountdownDiv10)
		}, 4000)
	setTimeout( function() {
			$div10.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			showDiv11()
		}, 5000)
}

const showDiv11 = () => {
	$div11.classList.remove('hideThis')
	setInterval(updateCountdownDiv11, 1000)
	updateCountdownDiv11()
	setTimeout( function() {
			clearInterval(updateCountdownDiv11)
		}, 4000)
	setTimeout( function() {
			$div11.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			startMultipleChoiceRd4()
		}, 5000)
}

const showDiv12 = () => {
	$div12.classList.remove('hideThis')
	setInterval(updateCountdownDiv12, 1000)
	updateCountdownDiv12()
	setTimeout( function() {
			clearInterval(updateCountdownDiv12)
		}, 4000)
	setTimeout( function() {
			$div12.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			showDiv13()
		}, 5000)
}

const showDiv13 = () => {
	$div13.classList.remove('hideThis')
	setInterval(updateCountdownDiv13, 1000)
	updateCountdownDiv13()
	setTimeout( function() {
			clearInterval(updateCountdownDiv13)
		}, 4000)
	setTimeout( function() {
			$div13.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			showDiv14()
		}, 5000)
}

const showDiv14 = () => {
	$div14.classList.remove('hideThis')
	setInterval(updateCountdownDiv14, 1000)
	updateCountdownDiv14()
	setTimeout( function() {
			clearInterval(updateCountdownDiv14)
		}, 4000)
	setTimeout( function() {
			$div14.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			showDiv15()
		}, 5000)
}

const showDiv15 = () => {
	$div15.classList.remove('hideThis')
	setInterval(updateCountdownDiv15, 1000)
	updateCountdownDiv15()
	setTimeout( function() {
			clearInterval(updateCountdownDiv15)
		}, 4000)
	setTimeout( function() {
			$div15.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			showDiv16()
		}, 5000)
}

const showDiv16 = () => {
	$div16.classList.remove('hideThis')
	setInterval(updateCountdownDiv16, 1000)
	updateCountdownDiv16()
	setTimeout( function() {
			clearInterval(updateCountdownDiv16)
		}, 4000)
	setTimeout( function() {
			$div16.classList.add('hideThis')
		}, 5000)
	/*setTimeout( function() {
			startMultipleChoiceRd5()
		}, 5000)*/
}





const startMultipleChoiceRd2 = () => {
	randomQuestion = questionRound2.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl.classList.remove('hideThis')
	nextQuestion2()
}

const nextQuestion2 = () => {
	resetQuestion2()
	showCurrentQuestion2(randomQuestion[currentQuestionIndex])
}


const showCurrentQuestion2 = (question) => {
	questionElementId.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect) {
			button.dataset.isCorrect = answer.isCorrect
			
		}
		button.addEventListener('click', selectedAnswer2)
		answerButtonsGrid.appendChild(button)
		})
}

const resetQuestion2 = () => {
	nextButton.classList.add('hideThis')
	while (answerButtonsGrid.firstChild) {
		answerButtonsGrid.removeChild(answerButtonsGrid.firstChild)
	}
}

const selectedAnswer2 = (newEl) => {
	let selectedButton = newEl.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid.children).forEach(button => {
		setStatus2(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hideThis')
	} else {
		nextButton.classList.add('hideThis')
		console.log(userPoints)
		showDiv7()
	}
}


const setStatus2 = (newElement, isCorrect) => {
	clearStatus2(newElement)
	if(isCorrect) {
		newElement.classList.add('correct')
	} else {
		newElement.classList.add('wrong')
	}
}

const clearStatus2 = (newElement) => {
	newElement.classList.remove('correct')
	newElement.classList.remove('wrong')
}


const startMultipleChoiceRd3 = () => {
	randomQuestion = questionRound3.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl.classList.remove('hideThis')
	nextQuestion3()
}

const nextQuestion3 = () => {
	resetQuestion3()
	showCurrentQuestion3(randomQuestion[currentQuestionIndex])
}


const showCurrentQuestion3 = (question) => {
	questionElementId.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect) {
			button.dataset.isCorrect = answer.isCorrect
			
		}
		button.addEventListener('click', selectedAnswer3)
		answerButtonsGrid.appendChild(button)
		})
}

const resetQuestion3 = () => {
	nextButton.classList.add('hideThis')
	while (answerButtonsGrid.firstChild) {
		answerButtonsGrid.removeChild(answerButtonsGrid.firstChild)
	}
}


const selectedAnswer3 = (newEl1) => {
	let selectedButton = newEl1.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid.children).forEach(button => {
		setStatus3(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hideThis')
	} else {
		nextButton.classList.add('hideThis')
		console.log(userPoints)
		setTimeout( function() {
			console.log('showDiv8 goes here');
			showDiv8();
		}, 1000)
		
	}
}

const setStatus3 = (newElement1, isCorrect) => {
	clearStatus3(newElement1)
	if(isCorrect) {
		newElement1.classList.add('correct')
	} else {
		newElement1.classList.add('wrong')
	}
}

const clearStatus3 = (newElement1) => {
	newElement1.classList.remove('correct')
	newElement1.classList.remove('wrong')
}





const updateCountdown = () => {
	for (let i = 0; i <= secsRound1; i++)
		$countdown1.innerHTML = secsRound1;
		secsRound1--;
		setTimeout( function(){
    	$div1.css('visibility','hidden');
       	},9000);
       	
       	
}


const updateCountdown2 = () => {
	for (let i = 0; i <= secsRound2; i++)
		$countdown2.innerHTML = secsRound2;
		secsRound2--;
		setTimeout( function(){
    		$div3.css('visibility','hidden');
       		},17000);
       	
}

const updateCountdown3 = () => {
	for (let i = 0; i <= secsRound3; i++)
		$countdown3.innerHTML = secsRound3;
		secsRound3--;
		setTimeout( function(){
    		$div4.css('visibility','hidden');
       		},23000);
       	
}

const updateCountdownMarg = () => {
	for (let i = 0; i <= secsRoundMarg; i++)
		$countdown4.innerHTML = secsRoundMarg;
		secsRoundMarg--;
		setTimeout( function() {
			$div6.classList.add('hideThis')
		}, 6000)
}

const updateCountdownOldFashioned = () => {
	for (let i = 0; i <= secsRoundOf; i++)
		$countdown5.innerHTML = secsRoundOf;
		secsRoundOf--;
		setTimeout( function() {
			clearInterval(updateCountdownOldFashioned)
		}, 3000)
}

const updateCountdownDiv8 = () => {
	for (let i = 0; i <= secsRoundMan; i++)
		$countdown6.innerHTML = secsRoundMan;
		secsRoundMan--;
		
}

const updateCountdownDiv9 = () => {
	for (let i = 0; i <= secsDiv9; i++)
		$countdown7.innerHTML = secsDiv9;
		secsDiv9--;
		
}

const updateCountdownDiv10 = () => {
	for (let i = 0; i <= secsDiv10; i++)
		$countdown8.innerHTML = secsDiv10;
		secsDiv10--;
		
}

const updateCountdownDiv11 = () => {
	for (let i = 0; i <= secsDiv11; i++)
		$countdown9.innerHTML = secsDiv11;
		secsDiv11--;
		
}

const updateCountdownDiv12 = () => {
	for (let i = 0; i <= secsDiv12; i++)
		$countdown10.innerHTML = secsDiv12;
		secsDiv12--;
		
}

const updateCountdownDiv13 = () => {
	for (let i = 0; i <= secsDiv13; i++)
		$countdown11.innerHTML = secsDiv13;
		secsDiv13--;
		
}

const updateCountdownDiv14 = () => {
	for (let i = 0; i <= secsDiv14; i++)
		$countdown12.innerHTML = secsDiv14;
		secsDiv14--;
		
}

const updateCountdownDiv15 = () => {
	for (let i = 0; i <= secsDiv15; i++)
		$countdown13.innerHTML = secsDiv15;
		secsDiv15--;
		
}

const updateCountdownDiv16 = () => {
	for (let i = 0; i <= secsDiv16; i++)
		$countdown14.innerHTML = secsDiv16;
		secsDiv16--;
		
}

const playAudio = () => {
	audioContainer.play()
}

const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none')

}


$closeBtn.on('click', closeModal)

$closeBtn.click(function() {
	$("#imgDiv1").fadeOut(3000);

	
})


$closeBtn.click(function() {
	let firstTimeout = setTimeout( function(){
    	$div1.css('visibility','visible');
     	},3000)
	let secondTimeout = setTimeout( function(){
		$div3.css('visibility', 'visible');
		}, 10000)
	let thirdTimeout = setTimeout( function(){
		$div4.css('visibility', 'visible');
		}, 17000)
	setTimeout( function(){
    		startMultipleChoice()
       		},24000);

})

$closeBtn.click(function() {
	let setInt1 = setInterval(updateCountdown, 1000);
	let setInt2 = setInterval(updateCountdown2, 1000);
	let setInt3 = setInterval(updateCountdown3, 1000);
	setTimeout( function() {
		clearInterval(setInt1)
		}, 23000);
	setTimeout( function() {
		clearInterval(setInt2)
		}, 23000);
	setTimeout( function() {
		clearInterval(setInt3);
		}, 23000)
	playAudio()
	
})










setTimeout(openModal, 1000);
});





