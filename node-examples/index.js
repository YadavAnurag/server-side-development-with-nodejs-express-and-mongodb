const rect = require('./rectangle');

const solveRect = (l, b) => {
    console.log(`Solving for ${l}, ${b}`);
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log('Error: ', err.message);
        }else{
            console.log(`Area of rectangle: ${rectangle.area(l,b)}`);
            console.log(`Area of perimeter: ${rectangle.perimeter(l,b)}`);
        }
    });
};

solveRect(2,3);
solveRect(-1, 3);
