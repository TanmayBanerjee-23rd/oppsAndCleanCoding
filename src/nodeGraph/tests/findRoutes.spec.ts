import { createNodes } from "../GraphNode";

describe( " Positive test cases :: Checking airport connectivity :: ", () => {

    const airportNames = [ "bangalore", "hyderabad", "pune", "mumbai", "kolkata", "delhi", "chandigarh", "kochiAP" ];
    const [ bangaloreAP, hyderabadAP, puneAP, mumbaiAP, kolkataAP, delhiAP, chandigarhAP, kochiAP ] = createNodes( airportNames );

    const legs = { 
        "delhiAP": { vertex: delhiAP, edgeWeight: 2 },
        "hyderabadAP": { vertex: hyderabadAP, edgeWeight: 8 },
        "mumbaiAP": { vertex: mumbaiAP, edgeWeight: 1 },
        "chandigarhAP": { vertex: chandigarhAP, edgeWeight: 9 },
        "kolkataAP": { vertex: kolkataAP, edgeWeight: 3 },
        "puneAP": { vertex: puneAP, edgeWeight: 4 },
        "bangaloreAP": { vertex: bangaloreAP, edgeWeight: 5 },
        "kochiAP": { vertex: kochiAP, edgeWeight: 6 }
    };

    describe( "Check connectivity from bangalore to other airports :: ", () => {

        beforeEach( () => {
    
            bangaloreAP.createLegs( [
                legs.mumbaiAP,
                legs.hyderabadAP
            ] );

            mumbaiAP.createLeg( legs.delhiAP );

            delhiAP.createLeg( legs.chandigarhAP );

            hyderabadAP.createLeg( legs.chandigarhAP );

        });
    
        test( " Find the shortest route between bangalore and mumbai airports :: ", () => {
            expect( bangaloreAP.findShortestRouteTo( chandigarhAP ) ).toEqual( "bangalore -> hyderabad -> chandigarh" );
        });
    
        test( " Find the cheapest route between bangalore and kolkata airports :: ", () => {
            expect( bangaloreAP.findCheapestRouteTo( chandigarhAP ) ).toEqual( "bangalore -> mumbai -> delhi -> chandigarh" );
        });

        test( " Find the cheapest route between bangalore and kolkata airports :: ", () => {
            expect( bangaloreAP.findCheapestRouteTo( kochiAP ) ).toEqual( "No routes found to reach destination." );
        });
    });

})