// include required packages
import inquirer from "inquirer";
import fs from "fs";
import svg from "svg.js";

// import the shapes classes
import { Triangle, Square, Circle } from "./lib/shapes.js";

// array of questions for the user to generate logo
const questions = [
  {
    type: "input",
    name: "title",
    message:
      "Please enter a company name/acronym, more than zero no more than three characters:",
    validate: (input) => input.length > 0 && input.length <= 3,
  },
  {
    type: "input",
    name: "colour",
    //eventually I would want this validated to an actual list of colours and hex codes
    message: "Please enter a text colour/hex code, ensure you enter a valid colour, mixed colours should be hyphenated (ie 'dark-gray'):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColour",
    //eventually I would want this validated to an actual list of colours and hex codes
    message: "Please enter a shape colour/hex code, ensure you enter a valid colour, mixed colours should be hyphenated (ie 'dark-gray'):",
  },
];
//invokes the user question prompts with inquirer
userPrompts();

//this function starts the user promps
function userPrompts() {
  inquirer.prompt(questions).then((data) => {
    // this is the function call to pass the data from question prompts to a function to make the logo and then save the file
    generateSVG(data);
  });
};

// this function generates the svg file
// takes answers from inquirer and dumps them into predefined text
function generateSVG(data) {
  let logo = "";
  switch (data.shape) {
    case "triangle":
      const triangle = new Triangle(
        data.title,
        data.colour,
        data.shape,
        data.shapeColour
      );
      logo = triangle.makeTriangle();
      // this calls the function to write the generated logo to file with the user input company acronym/title
      writeSVG(logo, `logo.svg`); 
      break;

    case "square":
      const square = new Square(
        data.title,
        data.colour,
        data.shape,
        data.shapeColour
      );
      logo = square.makeSquare();
      // this calls the function to write the generated logo to file with the user input company acronym/title
      writeSVG(logo, `logo.svg`);
      break;

    case "circle":
      const circle = new Circle(
        data.title,
        data.colour,
        data.shape,
        data.shapeColour
      );
      logo = circle.makeCircle();
      // this calls the function to write the generated logo to file with the user input company acronym/title
      writeSVG(logo, `logo.svg`);
      break;
  };
};

// this function actaully writes the generated svg file to directory
function writeSVG(logo, fileName) {
  fs.writeFile(fileName, logo, (err) => {
    if (err) console.log(err);
    console.log("Generated logo.svg");
  });
};