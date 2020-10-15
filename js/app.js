

let setInt1, setInt2, setInt3, firstTimeout, secondTimeout, thirdTimeout, secsRoundMarg






$( () => {

userPoints = 0;

const manhattanAnswers = []
const oldFashionedAnswers = []
const oldFashionedAnswers2 = []
const margaritaAnswers = []
const martiniAnswers = []


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
let secsDiv17 = 4;


const audioContainer = document.getElementById("audioContainer"); 
const questionElementId = document.getElementById('question')
const answerButtonsGrid = document.getElementById('answerSelections')
const containerEl = document.getElementById('container');
const questionElementId2 = document.getElementById('question2')
const answerButtonsGrid2 = document.getElementById('answerSelections2')
const containerEl2 = document.getElementById('container2');
const questionElementId3 = document.getElementById('question3')
const answerButtonsGrid3 = document.getElementById('answerSelections3')
const containerEl3 = document.getElementById('container3');
const questionElementId4 = document.getElementById('question4')
const answerButtonsGrid4 = document.getElementById('answerSelections4')
const containerEl4 = document.getElementById('container4');
const congratsText = document.getElementById('congrats')



const nextButton = document.getElementById('nextButtonQuiz')
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	nextQuestion()
})
const nextButton2 = document.getElementById('nextButtonQuiz2')
nextButton2.addEventListener('click', () => {
	currentQuestionIndex++
	nextQuestion4()
})

const nextButton3 = document.getElementById('nextButtonQuiz3')
nextButton3.addEventListener('click', () => {
	currentQuestionIndex++
	nextQuestion5()
})

const nextButton4 = document.getElementById('nextButtonQuiz4')
nextButton4.addEventListener('click', () => {
	currentQuestionIndex++
	nextQuestion5050()
})


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
const $countdown15 = document.getElementById('countdown15');
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
const $div17 = document.getElementById('div17');
const $oldFashionedQuestion = document.getElementById('oldFashionedQuestion');
const $oldFashionedQuestion2 = document.getElementById('oldFashionedQuestion2');
const $margaritaQuestionDiv = document.getElementById('margaritaQuestionDiv');
const $manhattanQuestionDiv = document.getElementById('manhattanQuestionDiv');
const $martiniQuestionDiv = document.getElementById('martiniQuestionDiv');
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


const questionRound5 = [
	{
		question: 'How do you prepare a classic Martini?',
		answers: [
			{ text: 'dash of sweet vermouth\n2oz gin\nlemon garnish', isCorrect: false},
			{ text: 'dash of dry vermouth\n2oz gin\nbar spoon of olive brine\nlemon garnish', isCorrect: false},
			{ text: 'dash of dry vermouth\n2oz gin\nolive garnish', isCorrect: true},
			{ text: 'a few drops of dry vermouth\n2oz gin\nolive garnish', isCorrect: false}
		]
	},
	{
		question: 'What is the recipe for an Extra Dry Martini?',
		answers: [
			{ text: 'a few drops of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: true},
			{ text: 'dash of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false},
			{ text: '2 oz gin or vodka\nolive garnish', isCorrect: false},
			{ text: 'dash of dry vermouth\n2 oz gin or vodka\npearl onion garnish', isCorrect: false}
		]
	},
	{
		question: 'How is a Dirty Martini prepared?',
		answers: [
		{ text: '2 oz gin or vodka\nolive garnish', isCorrect: false},
		{ text: 'a few drops of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false},
		{ text: 'a dash of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false},
		{ text: 'dash of dry vermouth\n2oz gin\nbar spoon of olive brine\nolive garnish', isCorrect: true}
		]
	},
	{
		question: 'What makes a Gibson different from a typical Martini?',
		answers: [
			{ text: 'it has 3 oz of gin or vodka instead of 2', isCorrect: false},
			{ text: 'it is stirred and not shaken', isCorrect: false},
			{ text: 'it is garnished with a pearl onion instead of an olive or lemon twist', isCorrect: true},
			{ text: 'it\'s served on the rocks', isCorrect: false}
		]
	},
	{
		question: 'How is an In and Out Martini prepared?',
		answers: [
			{ text: 'it\'s served straight from the bottle to the glass', isCorrect: false},
			{ text: 'dash of dry vermouth\nshake or stir in shaker with ice\ndiscard vermouth using julip strainer\n2 oz vodka or gin\nshake or stir and then strain into martini glass\ngarnish', isCorrect: true},
			{ text: 'dash of dry vermouth\n2oz gin\nbar spoon of olive brine\nolive garnish', isCorrect: false},
			{ text: 'dash of dry vermouth\n2oz gin\nbar spoon of olive brine\nolive garnish', isCorrect: false}
		]
	},
	{
		question: 'What is the recipe for a Bone Dry Martini?',
		answers: [
		{ 
			text: 'dash of dry vermouth\nshake or stir in shaker with ice\ndiscard vermouth using julip strainer\n2 oz vodka or gin\nshake or stir and then strain into martini glass\ngarnish', isCorrect: false},
		{ text: 'dash of dry vermouth\n2oz gin\nolive garnish', isCorrect: false},
		{ text: 'a few drops of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false},
		{ text: '2 oz gin or vodka\nolive garnish', isCorrect: true}
		]
	}
]


const questionRound5050 = [
	{
		question: 'How do you prepare a classic Martini?',
		answers: [
			{ text: 'dash of dry vermouth\n2oz gin\nbar spoon of olive brine\nlemon garnish', isCorrect: false},
			{ text: 'dash of dry vermouth\n2oz gin\nolive garnish', isCorrect: true}
		]
	},
	{
		question: 'What is the recipe for an Extra Dry Martini?',
		answers: [
			{ text: 'a few drops of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: true},
			{ text: 'dash of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false}
		]
	},
	{
		question: 'How is a Dirty Martini prepared?',
		answers: [
		{ text: 'a dash of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false},
		{ text: 'dash of dry vermouth\n2oz gin\nbar spoon of olive brine\nolive garnish', isCorrect: true}
		]
	},
	{
		question: 'What makes a Gibson different from a typical Martini?',
		answers: [
			{ text: 'it is stirred and not shaken', isCorrect: false},
			{ text: 'it is garnished with a pearl onion instead of an olive or lemon twist', isCorrect: true}
		]
	},
	{
		question: 'How is an In and Out Martini prepared?',
		answers: [
			{ text: 'it\'s served straight from the bottle to the glass', isCorrect: false},
			{ text: 'dash of dry vermouth\nshake or stir in shaker with ice\ndiscard vermouth using julip strainer\n2 oz vodka or gin\nshake or stir and then strain into martini glass\ngarnish', isCorrect: true}
		]
	},
	{
		question: 'What is the recipe for a Bone Dry Martini?',
		answers: [
			{ text: '2 oz gin or vodka\nolive garnish', isCorrect: true},
			{ text: 'dash of dry vermouth\n2 oz gin or vodka\nolive garnish', isCorrect: false}
		]
	}
]



const martiniQuestion = () => {
	$martiniQuestionDiv.classList.remove('hideThis')
	$('#submit5').on('click', () => {
		const inputValue1 = $('#input-box1').val()
		martiniAnswers.push(inputValue1)
			if (inputValue1 == "dry vermouth") {
				userPoints++
			}	

		const inputValue2 = $('#input-box2').val()
		martiniAnswers.push(inputValue2)
			if (inputValue2 == "shake vermouth in shaker with ice") {
				userPoints++
			}

		const inputValue3 = $('#input-box3').val()
		martiniAnswers.push(inputValue3)
			if (inputValue3 == "discard vermouth") {
				userPoints++
			}

		const inputValue4 = $('#input-box4').val()
		martiniAnswers.push(inputValue4)
			if (inputValue4 == "vodka") {
				userPoints++
			}
		const inputValue5 = $('#input-box5').val()
		martiniAnswers.push(inputValue5)
			if (inputValue5 == "shake and strain vodka") {
				userPoints++
			}

		const inputValue6 = $('#input-box6').val()
		martiniAnswers.push(inputValue6)
			if (inputValue6 == "garnish") {
				userPoints++
			}
	if (userPoints >= 33) {
		setTimeout( function() {
			alert('You won the game! Congrats!');
			
		}, 500)}
		else {
			setTimeout( function() {
			alert('You didn\'t quite beat the game. Your point total was: ' + userPoints + '. Refresh the page to play again and become a Martini Master!');
		}, 500)}
	setTimeout( function() {
			$martiniQuestionDiv.classList.add('hideThis')
		}, 500)

})


}



const manhattanQuestion = () => {
	$manhattanQuestionDiv.classList.remove('hideThis')
	$('#submit4').on('click', () => {
		const inputValue1 = $('#input-box1').val()
		manhattanAnswers.push(inputValue1)
			if (inputValue1 == "yes") {
				userPoints++
			}	

		const inputValue2 = $('#input-box2').val()
		manhattanAnswers.push(inputValue2)
			if (inputValue2 == "yes") {
				userPoints++
			}

		const inputValue3 = $('#input-box3').val()
		manhattanAnswers.push(inputValue3)
			if (inputValue3 == "whiskey") {
				userPoints++
			}

		const inputValue4 = $('#input-box4').val()
		manhattanAnswers.push(inputValue4)
			if (inputValue4 == "lemon twist") {
				userPoints++
			}

	alert("Your current points are: " + userPoints)
	setTimeout( function() {
			$manhattanQuestionDiv.classList.add('hideThis')
		}, 500)
	setTimeout( function() {
			console.log('manDiv goes here');
			showDiv12();
		}, 500)

})


}







const showDivOldFashQuestion2 = () => {
	$oldFashionedQuestion2.classList.remove('hideThis')
	$('#submit3').on('click', () => {
		const inputValue1 = $('#input-box1').val()
		oldFashionedAnswers2.push(inputValue1)
			if (inputValue1 == "1") {
				userPoints++
			}	

		const inputValue2 = $('#input-box2').val()
		oldFashionedAnswers2.push(inputValue2)
			if (inputValue2 == "2") {
				userPoints++
			}

		const inputValue3 = $('#input-box3').val()
		oldFashionedAnswers2.push(inputValue3)
			if (inputValue3 == "1") {
				userPoints++
			}

		const inputValue4 = $('#input-box4').val()
		oldFashionedAnswers2.push(inputValue4)
			if (inputValue4 == "2") {
				userPoints++
			}
	alert("Your current points are: " + userPoints)
	setTimeout( function() {
			$oldFashionedQuestion2.classList.add('hideThis')
		}, 500)
	setTimeout( function() {
			console.log('showDiv8 goes here');
			showDiv8();
		}, 500)

})


}





const showDivOldFashQuestion = () => {
	$oldFashionedQuestion.classList.remove('hideThis')
	$('#submit2').on('click', () => {
		const inputValue1 = $('#input-box1').val()
		oldFashionedAnswers.push(inputValue1)
			if (inputValue1 == "sugar cube") {
				userPoints++
			}	

		const inputValue2 = $('#input-box2').val()
		oldFashionedAnswers.push(inputValue2)
			if (inputValue2 == "bitters") {
				userPoints++
			}

		const inputValue3 = $('#input-box3').val()
		oldFashionedAnswers.push(inputValue3)
			if (inputValue3 == "club soda") {
				userPoints++
			}

		const inputValue4 = $('#input-box4').val()
		oldFashionedAnswers.push(inputValue4)
			if (inputValue4 == "ice cube") {
				userPoints++
			}

		const inputValue5 = $('#input-box5').val()
		oldFashionedAnswers.push(inputValue5)
			if (inputValue5 == "rye or bourbon") {
				userPoints++
			}

		const inputValue6 = $('#input-box6').val()
		oldFashionedAnswers.push(inputValue6)
			if (inputValue6 == "lemon rind") {
				userPoints++
			}
	alert("Your current points are: " + userPoints)
	setTimeout( function() {
			$oldFashionedQuestion.classList.add('hideThis')
		}, 500)
	setTimeout( function() {
			console.log('next div goes here');
			showDivOldFashQuestion2();
		}, 500)
	})
}






const margaritaQuestion = () => {
	setTimeout( function() {
		containerEl.classList.add('hideThis');
		}, 200)
	setTimeout( function() {
		$margaritaQuestionDiv.classList.remove('hideThis')
		}, 200)
	$('#submit').on('click', () => {
		let inputValue1 = $('#input-box1').val()
		margaritaAnswers.push(inputValue1)
			if (inputValue1 == "frost rim") {
				userPoints++
			}	

		let inputValue2 = $('#input-box2').val()
		margaritaAnswers.push(inputValue2)
			if (inputValue2 == "tequila") {
				userPoints++
			}

		let inputValue3 = $('#input-box3').val()
		margaritaAnswers.push(inputValue3)
			if (inputValue3 == "triple sec") {
				userPoints++
			}

		let inputValue4 = $('#input-box4').val()
		margaritaAnswers.push(inputValue4)
			if (inputValue4 == "sour mix") {
				userPoints++
			}

		let inputValue5 = $('#input-box5').val()
		margaritaAnswers.push(inputValue5)
			if (inputValue5 == "lime garnish") {
				userPoints++
			}
	alert("Your current points are: " + userPoints)
	setTimeout( function() {
			$margaritaQuestionDiv.classList.add('hideThis')
		}, 500)
	setTimeout( function() {
			console.log('showDiv7 goes here');
			showDiv7();
		}, 500)

})


}








const updateCountdownDiv17 = () => {
	for (let i = 0; i <= secsDiv17; i++)
		$countdown15.innerHTML = secsDiv17;
		secsDiv17--;
		
}


const updateCountdownDiv16 = () => {
	for (let i = 0; i <= secsDiv16; i++)
		$countdown14.innerHTML = secsDiv16;
		secsDiv16--;
		
}


const updateCountdownDiv15 = () => {
	for (let i = 0; i <= secsDiv15; i++)
		$countdown13.innerHTML = secsDiv15;
		secsDiv15--;
		
}


const updateCountdownDiv14 = () => {
	for (let i = 0; i <= secsDiv14; i++)
		$countdown12.innerHTML = secsDiv14;
		secsDiv14--;
		
}




const updateCountdownDiv13 = () => {
	for (let i = 0; i <= secsDiv13; i++)
		$countdown11.innerHTML = secsDiv13;
		secsDiv13--;
		
}



const updateCountdownDiv12 = () => {
	for (let i = 0; i <= secsDiv12; i++)
		$countdown10.innerHTML = secsDiv12;
		secsDiv12--;
		
}


const updateCountdownDiv11 = () => {
	for (let i = 0; i <= secsDiv11; i++)
		$countdown9.innerHTML = secsDiv11;
		secsDiv11--;
		
}


const updateCountdownDiv10 = () => {
	for (let i = 0; i <= secsDiv10; i++)
		$countdown8.innerHTML = secsDiv10;
		secsDiv10--;
		
}


const updateCountdownDiv9 = () => {
	for (let i = 0; i <= secsDiv9; i++)
		$countdown7.innerHTML = secsDiv9;
		secsDiv9--;
		
}


const updateCountdownDiv8 = () => {
	for (let i = 0; i <= secsRoundMan; i++)
		$countdown6.innerHTML = secsRoundMan;
		secsRoundMan--;
		
}


const updateCountdownOldFashioned = () => {
	for (let i = 0; i <= secsRoundOf; i++)
		$countdown5.innerHTML = secsRoundOf;
		secsRoundOf--;
		setTimeout( function() {
			clearInterval(updateCountdownOldFashioned)
		}, 3000)
}



const updateCountdownMarg = () => {
	for (let i = 0; i <= secsRoundMarg; i++)
		$countdown4.innerHTML = secsRoundMarg;
		secsRoundMarg--;
		setTimeout( function() {
			$div6.classList.add('hideThis')
		}, 6000)
}


const updateCountdown3 = () => {
	for (let i = 0; i <= secsRound3; i++)
		$countdown3.innerHTML = secsRound3;
		secsRound3--;
		setTimeout( function(){
    		$div4.css('visibility','hidden');
       		},23000);
       	
}



const updateCountdown2 = () => {
	for (let i = 0; i <= secsRound2; i++)
		$countdown2.innerHTML = secsRound2;
		secsRound2--;
		setTimeout( function(){
    		$div3.css('visibility','hidden');
       		},17000);
       	
}



const updateCountdown = () => {
	for (let i = 0; i <= secsRound1; i++)
		$countdown1.innerHTML = secsRound1;
		secsRound1--;
		setTimeout( function(){
    	$div1.css('visibility','hidden');
       	},9000);
       	
       	
}

const showDiv17 = () => {
	$div17.classList.remove('hideThis')
	setInterval(updateCountdownDiv17, 1000)
	updateCountdownDiv17()
	setTimeout( function() {
			clearInterval(updateCountdownDiv17)
		}, 4000)
	setTimeout( function() {
			$div17.classList.add('hideThis')
		}, 5000)
	setTimeout( function() {
			startMultipleChoiceRd5()
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
	setTimeout( function() {
			showDiv17()
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

const showDiv12 = () => {
	containerEl2.classList.add('hideThis')
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


const showDiv8 = () => {
	containerEl.classList.add('hideThis')
	$div8.classList.remove('hideThis')
	setInterval(updateCountdownDiv8, 1000)
	updateCountdownDiv8()
	setTimeout( function() {
			clearInterval(updateCountdownDiv8)
		}, 6000)
	setTimeout( function() {
			$div8.classList.add('hideThis')
		}, 4000)
	setTimeout( function() {
			showDiv9()
		}, 4000)
}

const showDiv7 = () => {
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
			showDivOldFashQuestion()
		}, 5000)
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


const showDiv3 = () => {
	setTimeout( function(){
    $div3.css('visibility','visible');
       },3000)
}






const clearStatus5050 = (element) => {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const clearStatus5 = (element) => {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


const setStatus5050 = (element, isCorrect) => {
	clearStatus5050(element)
	if(isCorrect) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

const setStatus5 = (element, isCorrect) => {
	clearStatus5(element)
	if(isCorrect) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

const selectedAnswer5050 = (e) => {
	let selectedButton = e.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid4.children).forEach(button => {
		setStatus5050(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton4.classList.remove('hideThis')
	} else {
		nextButton4.classList.add('hideThis')
		console.log(userPoints)
		if (userPoints >= 33) {
		setTimeout( function() {
			alert('You won the game! Congrats!');
			
		}, 1000)}
		else {
			setTimeout( function() {
			alert('You didn\'t quite beat the game. Your point total was: ' + userPoints + '. Refresh the page to play again and become a Martini Master!');
		}, 1000)}
		setTimeout( function() {
			containerEl4.classList.add('hideThis')
		}, 1000)
	}
}


const selectedAnswer5 = (e) => {
	let selectedButton = e.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid3.children).forEach(button => {
		setStatus5(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton3.classList.remove('hideThis')
	} else {
		nextButton3.classList.add('hideThis')
		console.log(userPoints)
		setTimeout( function() {
			martiniQuestion()
		}, 1000)
		setTimeout( function() {
			containerEl3.classList.add('hideThis')
		}, 1000)
		
	}
}

const resetQuestion5050 = () => {
	nextButton4.classList.add('hideThis')
	while (answerButtonsGrid4.firstChild) {
		answerButtonsGrid4.removeChild(answerButtonsGrid4.firstChild)
	}
}

const resetQuestion5 = () => {
	nextButton3.classList.add('hideThis')
	while (answerButtonsGrid3.firstChild) {
		answerButtonsGrid3.removeChild(answerButtonsGrid3.firstChild)
	}
}


const showCurrentQuestion5050 = (question) => {
	questionElementId4.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect===true) {
			button.dataset.isCorrect = answer.isCorrect
			console.log('5050 function')
		}
		button.addEventListener('click', selectedAnswer5050)
		answerButtonsGrid4.appendChild(button)
		})
}



const showCurrentQuestion5 = (question) => {
	console.log('not5050func')
	questionElementId3.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect) {
			button.dataset.isCorrect = answer.isCorrect
			
		}
		button.addEventListener('click', selectedAnswer5)
		answerButtonsGrid3.appendChild(button)
		})
}


const nextQuestion5050 = () => {
	resetQuestion5050()
	showCurrentQuestion5050(randomQuestion[currentQuestionIndex])

}


const nextQuestion5 = () => {
	resetQuestion5()
	showCurrentQuestion5(randomQuestion[currentQuestionIndex])

}


const startMultipleChoice5050 = () => {
	randomQuestion = questionRound5050.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl4.classList.remove('hideThis')
	nextQuestion5050()
}

const startMultipleChoiceRd5 = () => {
	if (userPoints >= 20) {
		alert("You unlocked the 50/50 Martini round! Congrats!")
		startMultipleChoice5050()
	}
	else {
	alert("You didn't earn enough points to unlock the 50/50 option for the Martini round. Hopefully, next time!")
	randomQuestion = questionRound5.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl3.classList.remove('hideThis')
	nextQuestion5()}
}


const clearStatus4 = (element) => {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const setStatus4 = (element, isCorrect) => {
	clearStatus4(element)
	if(isCorrect) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}


const selectedAnswer4 = (e) => {
	let selectedButton = e.target
	let correct = selectedButton.dataset.isCorrect
	if (correct) {
		userPoints++
	}
	Array.from(answerButtonsGrid2.children).forEach(button => {
		setStatus4(button, button.dataset.isCorrect)
	})
	if (randomQuestion.length > currentQuestionIndex + 1) {
		nextButton2.classList.remove('hideThis')
	} else {
		nextButton2.classList.add('hideThis')
		console.log(userPoints)
		setTimeout( function() {
			containerEl2.classList.add('hideThis')
			manhattanQuestion()
		}, 1000)
	}
}


const resetQuestion4 = () => {
	nextButton2.classList.add('hideThis')
	while (answerButtonsGrid2.firstChild) {
		answerButtonsGrid2.removeChild(answerButtonsGrid2.firstChild)
	}
}


const showCurrentQuestion4 = (question) => {
	questionElementId2.innerText = question.question
	question.answers.forEach( answer => {
		let button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btnPretty')
		if (answer.isCorrect) {
			button.dataset.isCorrect = answer.isCorrect
			
		}
		button.addEventListener('click', selectedAnswer4)
		answerButtonsGrid2.appendChild(button)
		})
}


const nextQuestion4 = () => {
	resetQuestion4()
	showCurrentQuestion4(randomQuestion[currentQuestionIndex])
}


const startMultipleChoiceRd4 = () => {
	randomQuestion = questionRound4.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl2.classList.remove('hideThis')
	nextQuestion4()
}




const clearStatus2 = (element) => {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


const setStatus2 = (element, isCorrect) => {
	clearStatus2(element)
	if(isCorrect) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

const selectedAnswer2 = (e) => {
	let selectedButton = e.target
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
		margaritaQuestion()
	}
}




const resetQuestion2 = () => {
	nextButton.classList.add('hideThis')
	while (answerButtonsGrid.firstChild) {
		answerButtonsGrid.removeChild(answerButtonsGrid.firstChild)
	}
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

const nextQuestion2 = () => {
	resetQuestion2()
	showCurrentQuestion2(randomQuestion[currentQuestionIndex])
}




const startMultipleChoiceRd2 = () => {
	randomQuestion = questionRound2.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	containerEl.classList.remove('hideThis')
	nextQuestion2()
}


const clearStatus = (element) => {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


const setStatus = (element, isCorrect) => {
	clearStatus(element)
	if(isCorrect) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
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



const resetQuestion = () => {
	nextButton.classList.add('hideThis')
	while (answerButtonsGrid.firstChild) {
		answerButtonsGrid.removeChild(answerButtonsGrid.firstChild)
	}
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



const nextQuestion = () => {
	resetQuestion()
	showCurrentQuestion(randomQuestion[currentQuestionIndex])
}



const startMultipleChoice = () => {
	randomQuestion = questionsRound1.sort(() => Math.random() - .5);
	currentQuestionIndex = 0
	containerEl.classList.remove('hideThis')
	nextQuestion()
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






