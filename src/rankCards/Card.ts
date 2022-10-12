import { SUIT_MEMBER_TYPE, SUIT_TYPE } from "../utilities/enums/card";

export class Card {

    private readonly suiteType: SUIT_TYPE;
    private readonly suiteMemberType: SUIT_MEMBER_TYPE;

    constructor( suiteType: SUIT_TYPE, suiteMemberType: SUIT_MEMBER_TYPE ) {
        
        this.suiteType = suiteType;
        this.suiteMemberType = suiteMemberType;
    };

    compareWith( otherCard: Card ): Card {

        if ( this.suiteMemberType > otherCard.suiteMemberType || this.suiteType > otherCard.suiteType ) {
            return this;
        }

        return otherCard;
    }
}