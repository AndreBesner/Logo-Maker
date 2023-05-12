// include required packages

// const inquirer = require('inquirer');
import inquirer from 'inquirer';
// const fs = require('fs');
import fs from 'fs';
// const svg = require('svg'); 

// import the shapes classes
import { Triangle } from './lib/shapes.js';
const shapeClass = new Triangle();

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
// actually no we need to take the answers from the data from inquirer and pass them into the shape class 
function generateSVG(data) {

}


// this function actaully writes the generated svg file to directory
function writeSVG(data){

}


const triangle = new Triangle(); // access the shape classes
console.log({triangle}); // ensure they work lol