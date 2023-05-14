// Import shape classes
// import { Triangle, Square, Circle } from "../lib/shapes.js";
const { Triangle } = require('./shapes');

describe("Triangle", () => {
  test("make sure it outputs the correct data to make a triangle", () => {
    const logo = new Triangle("try", "white", "Triangle", "#000000");
    const expectedLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      <polygon points="150,0 0,200 300,200" fill="#000000" />
      <text x="150" y="100" text-anchor="middle" fill="white" font-size="40">try</text>
    </svg>`.trim();
    expect(logo.toString().trim()).toBe(expectedLogo.toString().trim());
  });
});

