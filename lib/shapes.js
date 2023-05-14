// classes for the shapes
// try and do inheritance later

export class Triangle {
  constructor(title, colour, shape, shapeColour) {
    // console.log("test");
    this.title = title;
    this.colour = colour;
    this.shape = shape;
    this.shapeColour = shapeColour;
  }
  makeTriangle = () => {
    const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
            <polygon points="150,0 0,200 300,200" fill="${this.shapeColour}" />
            <text x="150" y="100" text-anchor="middle" fill="${this.colour}" font-size="40">${this.title}</text>
            </svg>`;
    return logo;
  };

  toString() {
    return this.makeTriangle();
  }
}

export class Square {
  constructor(title, colour, shape, shapeColour) {
    // console.log("test");
    this.title = title;
    this.colour = colour;
    this.shape = shape;
    this.shapeColour = shapeColour;
  }
  makeSquare = () => {
    const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
            <rect x="50" y="50" width="200" height="200" fill="${this.shapeColour}" />
            <text x="150" y="100" text-anchor="middle" fill="${this.colour}" font-size="40">${this.title}</text>
            </svg>`;
    return logo;
  };
}

export class Circle {
  constructor(title, colour, shape, shapeColour) {
    this.title = title;
    this.colour = colour;
    this.shape = shape;
    this.shapeColour = shapeColour;
  }
  makeCircle = () => {
    const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
            <circle cx="150" cy="100" r="75" fill="${this.shapeColour}" />
            <text x="150" y="105" text-anchor="middle" fill="${this.colour}" font-size="40">${this.title}</text>
            </svg>`;
    return logo;
  };
}

// module.exports = {
//   Triangle,
//   Circle,
//   Square
// }


// this would be basis for inheritance ..

// export class Shape {
//     constructor(title, colour, shape, shapeColour) {
//       // console.log("test");
//       this.title = title;
//       this.colour = colour;
//       this.shape = shape;
//       this.shapeColour = shapeColour;
//     }
// }

// export class Circle extends Shape
