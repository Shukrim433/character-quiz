# character-quiz

## Description

I built this project to get back into the basics of javascript, and refamiliarise myself with the foundational concepts.

## Functionality

- click event listener on the start button to hide the welcome page, display the questions page and call the displayQuestions() function

- the displayQuestions() loops through the options of each question in the "questions" array and creates a div for each option and a h2 containing the option's text which is placed inside each div. the question text content is also set using the currentQuestionIndex variable which is incramented after each question in the next function.

- the click event listener on the options container, retrieves the selected option via click event.target.value and compares it to the set answer for each character, depending on which is the corresponding character, 1 point is added to their variable. Then the currentQuestionIndex is incramented by one and the displayQuestions() function is called again, to display the next question. This continues until the currentQuestionIndex is >= the questions array length, in that case the stopQuiz() function is called

- the stopQuiz() function simply hides the questions page and displays the results page. And through a series of conditions in if statements we determine which character card to display as the result.

- the click event listener on the start again button reloads the page so you can restart the quiz.

## Application:
