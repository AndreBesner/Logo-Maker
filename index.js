// include required packages
import inquirer from "inquirer";
import fs from "fs";
import svg from "svg.js";

// import the shapes classes
import { Triangle, Square, Circle } from "./lib/shapes.js";
// const shapeClass = new Triangle();

// array of questions for the user
const questions = [
  {
    type: "input",
    name: "title",
    message:
      "Please enter a company name/acronym, no more than three characters:",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "colour",
    message: "Please enter a text colour:",
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
    message: "Please enter a shape colour:",
  },
];

//this function starts the user promps
function userPrompts() {
  inquirer.prompt(questions).then((data) => {
    // console.log({data});
    // this is where we will take the user data and feed it into
    // generate svg function with a switch case based on 'shape' choice
    generateSVG(data);
    //maybe we once we generate the svg we can put the write data function in that function?
  });
}
//invokes the user question prompts with inquirer
userPrompts();

// this function generates the svg file
// takes answers from inquirer and dumps them into predefined text
// actually no we need to take the answers from the data from inquirer and pass them into the shape class
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
      console.log(logo);
      break;

    case "square":
      const square = new Square(
        data.title,
        data.colour,
        data.shape,
        data.shapeColour
      );
      logo = square.makeSquare();
      console.log(logo);
      break;

    case "circle":
      const circle = new Circle(
        data.title,
        data.colour,
        data.shape,
        data.shapeColour
      );
      logo = circle.makeCircle();
      console.log(logo);
      break;
  }
}

// this function actaully writes the generated svg file to directory
function writeSVG(data) {}

const triangle = new Triangle(); // access the shape classes
// console.log({triangle}); // ensure they work lol
