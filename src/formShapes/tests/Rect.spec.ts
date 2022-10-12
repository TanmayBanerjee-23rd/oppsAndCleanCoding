import { Rectangle } from "../Rectangle";

describe( " Positive test cases :: Given a rectangle with dimentions as 10 X 20 ( metre ) :: ", () => {

    let rectObj: Rectangle;

    beforeEach( () => {
        rectObj = new Rectangle( 10, 20, "metre" );
    });

    test( "Area should be 200 :: ", () => {
        expect( rectObj.area() ).toEqual( "200 square metre" );
    });

    test( "Perimeter should be 60 :: ", () => {
        expect( rectObj.perimeter() ).toEqual( "60 metre" );
    });

    test( "Should receive a rectangle having area 202:: ", () => {
        const newRectObj = rectObj.scaleLengthWise( 10 );
        expect( newRectObj.area() ).toEqual( "202 square metre" );
    });
});

describe( " Negetive test cases :: Obj instantiation :: ", () => {

    test( "Should throw uncaugthException on passing length parameter as undefined :: ", () => {

        const shapeInstantiator = () => new Rectangle( undefined , 20, "metre" );

        expect( shapeInstantiator ).toThrow( "Required arguments missing while constructing rectangle object." );
    });

    test( "Should throw uncaugthException on passing breadth parameter as undefined :: ", () => {

        const shapeInstantiator = () => new Rectangle( 10, undefined, "metre" );

        expect( shapeInstantiator ).toThrow( "Required arguments missing while constructing rectangle object." );
    });

    test( "Should throw uncaugthException on passing unit parameter as undefined :: ", () => {

        const shapeInstantiator = () => new Rectangle( 10, 20, undefined );

        expect( shapeInstantiator ).toThrow( "Required arguments missing while constructing rectangle object." );
    });

});