import { faker } from "@faker-js/faker";
import { UNIT_TYPE } from "../../utilities/enums/unitEnums";
import { IUnitFactors } from "../../utilities/interfaces/UnitLab";
import { MetricType } from "../MetricType";
import { Unit } from "../Unit";

const randomNumber = faker.datatype.number();

describe( "Positive test cases :: Volume type conversions :: ", () => {

    test( `${ randomNumber } tblSp into equivalent teaSp :: `, () => {

        const teaSpFactors: IUnitFactors = {
            multiplicationFactor: 1,
            additionFactor: 0
        };
        const tblSpFactors: IUnitFactors = {
            multiplicationFactor: 3,
            additionFactor: 0
        };

        const teaSp = new MetricType( UNIT_TYPE.VOLUME, "TeaSpoon", teaSpFactors );
        const tblSp = new MetricType( UNIT_TYPE.VOLUME, "TableSpoon", tblSpFactors );

        const tblSpEquivalentOfTesSp = ( randomNumber * 3 );

        expect( new Unit( randomNumber, tblSp ).in( teaSp ) ).toEqual( new Unit( tblSpEquivalentOfTesSp, teaSp ) );
    });

    test( `${ randomNumber } cups into equivalent tblSp :: `, () => {

        const tblSpFactors: IUnitFactors = {
            multiplicationFactor: ( 1 / 3 ),
            additionFactor: 0
        };
        const cupFactors: IUnitFactors = {
            multiplicationFactor: 48,
            additionFactor: 0
        };

        const tblSp = new MetricType( UNIT_TYPE.VOLUME, "TableSpoon", tblSpFactors );
        const cup = new MetricType( UNIT_TYPE.VOLUME, "Cup", cupFactors );

        const cupEquivalentOfTblSp = ( randomNumber * 16 );

        expect( new Unit( randomNumber, cup ).in( tblSp ) ).toEqual( new Unit( cupEquivalentOfTblSp, tblSp ) );
    });

    test( `${ randomNumber } pint into equivalent tblSp :: `, () => {

        const tblSpFactors: IUnitFactors = {
            multiplicationFactor: ( 1 / 3 ),
            additionFactor: 0
        };
        const pintFactors: IUnitFactors = {
            multiplicationFactor: 96,
            additionFactor: 0
        };

        const tblSp = new MetricType( UNIT_TYPE.VOLUME, "TableSpoon", tblSpFactors );
        const pint = new MetricType( UNIT_TYPE.VOLUME, "Pint", pintFactors );

        const pintEquivalentOfTblSp = ( randomNumber * 16 * 2 );

        expect( new Unit( randomNumber, pint ).in( tblSp ) ).toEqual( new Unit( pintEquivalentOfTblSp, tblSp ) );
    });

    test( `${ randomNumber } tblSp into equivalent pint :: `, () => {

        const tblSpFactors: IUnitFactors = {
            multiplicationFactor: 3,
            additionFactor: 0
        };
        const pintFactors: IUnitFactors = {
            multiplicationFactor: ( 1 / 96 ),
            additionFactor: 0
        };

        const tblSp = new MetricType( UNIT_TYPE.VOLUME, "TableSpoon", tblSpFactors );
        const pint = new MetricType( UNIT_TYPE.VOLUME, "Pint", pintFactors );

        const tblSpEquivalentOfPint = ( randomNumber / ( 16 * 2 ) );

        expect( new Unit( randomNumber, tblSp ).in( pint ) ).toEqual( new Unit( tblSpEquivalentOfPint, pint ) );
    });
});