// include required packages
const inquirer = require('inquirer');
const fs = require('fs');
// const svg = require('svg'); 
//shape classes to be added


// array of questions for the user 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a company name/acronym, no more than three characters:',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'colour',
        message: 'Please enter a text colour:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColour',
        message: 'Please enter a shape colour:'
    }
];

//this function starts the user promps
function userPrompts() {
    inquirer.prompt(questions)
    .then(data => {
        console.log({data});
    })
}

//invokes the user question prompts with inquirer
userPrompts();



// this function generates the svg file
// takes answers from inquirer and dumps them into predefined text
// function generateSVG(data) {
//   <svg
//     version="1.1"
//     width="300"
//     height="200"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="100%" height="100%" fill="red" />

//     <circle cx="150" cy="100" r="80" fill="green" />

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
//       SVG
//     </text>
//   </svg>;
// }


// this function actaully writes the generated svg file to directory
function writeSVG(data){

}