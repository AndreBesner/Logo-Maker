// include required packages

const inquirer = require('inquirer');
const fs = require('fs');
const svg = require('svg'); 
//shape classes to be added


// array of questions for the user 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a company name/acronym, no more than three characters:'
    },
    {
        type: 'input',
        name: 'colour',
        message: 'Please enter a text colour:'
    },
    {
        type: 'select',
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