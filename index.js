import { Rectangle } from "./src/shapes/Rectangle";
import { Square } from "./src/shapes/Square";

process.on( 'uncaughtException', function ( err ) {

    console.log( "Please fix the error :: ", err.message );
    console.log( err.stack );
});

const rectObj = new Rectangle( 4, 5, "metre" );
const sqObj = new Square( 2, "centimetre" );

console.log( "Rectangle with dimentions 4 X 5 ( M ) has area :: ", rectObj.area(), "and perimetre :: ", rectObj.perimeter() );
console.log( "Square with edge 2 ( CM ) has area :: ", sqObj.area(), "and perimetre :: ", sqObj.perimeter() );
