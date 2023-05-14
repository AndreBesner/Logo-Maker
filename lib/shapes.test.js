// Import shape classes
const { Triangle, Circle } = require('./shapes');

// triangle test
describe("Triangle", () => {
  test("make sure it outputs the correct data to make a triangle with supplied parameters", () => {
    const triangle = new Triangle("try", "white", "Triangle", "#000000");
    const expectedLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><polygon points="150,0 0,200 300,200" fill="#000000" /><text x="150" y="100" text-anchor="middle" fill="white" font-size="40">try</text></svg>`;
    expect(triangle.makeTriangle()).toEqual(expectedLogo);
  });
});


// circle test
describe("Circle", () => {
  test("make sure it outputs the correct data to make a circle with supplied parameters", () => {
    const circle = new Circle("hah", "blue", "Circle", "dark-green");
    const expectedLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><circle cx="150" cy="100" r="75" fill="dark-green" /><text x="150" y="105" text-anchor="middle" fill="blue" font-size="40">hah</text></svg>`
    expect(circle.makeCircle()).toEqual(expectedLogo);
  });
});
