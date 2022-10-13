import { ROUTE_TYPE } from "../../utilities/enums/routes";

describe( " Positive test cases :: Checking airport connectivity :: ", () => {

    beforeEach( () => {
        const edges = [ 
            [ hyderabadAP, 2 ] // [ node, edgeWeight ]
        ]
        bangaloreAP.createRelationTo( hyderabadAP, puneAP, mumbaiAP );
    });

    test( " Find the shortest route between bangalore and mumbai airports :: ", () => {
        expect( bangaloreAP.to( mumbaiAP, ROUTE_TYPE.SHORTEST ) )
    });
})