import { SUIT_MEMBER_TYPE, SUIT_TYPE } from "../../enums/card";
import { Card } from "../Card";

describe( "Positive test cases :: card comparision :: ", () => {

    test( "Comparing 8 of SPADES with 8 of DIAMONDS should return 8 of SPADES :: ", () => {

        const eightOfSpades = new Card( SUIT_TYPE.SPADES, SUIT_MEMBER_TYPE.EIGHT );
        const eightOfDiamonds = new Card( SUIT_TYPE.DIAMONDS, SUIT_MEMBER_TYPE.EIGHT );
        
        expect( eightOfSpades.compareWith( eightOfDiamonds ) ).toEqual( eightOfSpades );
    });

    test( "Comparing ACE of HEARTS with KING of CLUBS should return ACE of HEARTS :: ", () => {

        const aceOfHearts = new Card( SUIT_TYPE.HEARTS, SUIT_MEMBER_TYPE.ACE );
        const kingOfClubs = new Card( SUIT_TYPE.CLUBS, SUIT_MEMBER_TYPE.KING );

        expect( kingOfClubs.compareWith( aceOfHearts ) ).toEqual( aceOfHearts );
    });
})