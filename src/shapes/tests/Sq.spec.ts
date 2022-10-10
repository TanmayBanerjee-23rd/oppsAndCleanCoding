import { Square } from "../Square";

describe( " Positive test cases :: Given a square with edge weight as 10 ( metre ) :: ", () => {

    let sqObj: Square;

    beforeEach( () => {
        sqObj = new Square( 10, "metre" );
    });

    test( "Area should be 100 :: ", () => {
        expect( sqObj.area() ).toEqual( "100 square metre" );
    });

    test( "Perimeter should be 40 :: ", () => {
        expect( sqObj.perimeter() ).toEqual( "40 metre" );
    });
});

describe( " Negetive test cases :: Obj instantiation :: ", () => {

    test( "Should throw uncaugthException on passing edge weight parameter as undefined :: ", () => {

        const shapeInstantiator = () => new Square( undefined , "metre" );

        expect( shapeInstantiator ).toThrow( "Required arguments missing while constructing square object." );
    });

    test( "Should throw uncaugthException on passing unit parameter as undefined :: ", () => {

        const shapeInstantiator = () => new Square( 10, undefined );

        expect( shapeInstantiator ).toThrow( "Required arguments missing while constructing square object." );
    });

});