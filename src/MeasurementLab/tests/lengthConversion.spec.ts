import { faker } from "@faker-js/faker";
import { IUnitFactors } from "../../interfaces/UnitLab";
import { MetricType } from "../MetricType";
import { Unit } from "../Unit";

const randomNumber = faker.datatype.number();

describe( "Positive test cases :: Length metric type conversions :: ", () => {


    test( `${ randomNumber } foot into equivalent inch :: `, () => {

        const inchFactors: IUnitFactors = {
            multiplicationFactor: 1,
            additionFactor: 0
        };
        const footFactors: IUnitFactors = {
            multiplicationFactor: 12,
            additionFactor: 0
        };

        const inch = new MetricType( "Inch", inchFactors );
        const foot = new MetricType( "Foot", footFactors );

        const inchesEquivalentOfFoot = ( randomNumber * 12 );

        expect( new Unit( randomNumber, foot ).in( inch ) ).toEqual( new Unit( inchesEquivalentOfFoot, inch ) );
    });

    test( `${ randomNumber } yards into equivalent foot :: `, () => {

        const yardFactors: IUnitFactors = {
            multiplicationFactor: 36,
            additionFactor: 0
        };

        const footFactors: IUnitFactors = {
            multiplicationFactor: ( 1 / 12 ),
            additionFactor: 0
        };

        const yard = new MetricType( "Yard", yardFactors );
        const foot = new MetricType( "Foot", footFactors );

        const footEquivalentOfYard = ( randomNumber * 3 );

        expect( new Unit( randomNumber, yard ).in( foot ) ).toEqual( new Unit( footEquivalentOfYard, foot ) );
    });

    test( `${ randomNumber } miles into equivalent foot :: `, () => {

        const mileFactors: IUnitFactors = {
            multiplicationFactor: 63360,
            additionFactor: 0
        };

        const footFactors: IUnitFactors = {
            multiplicationFactor: ( 1 / 12 ),
            additionFactor: 0
        };

        const mile = new MetricType( "Mile", mileFactors );
        const foot = new MetricType( "Foot", footFactors );

        const footEquivalentOfMile = ( randomNumber * 5280 );

        expect( new Unit( randomNumber, mile ).in( foot ) ).toEqual( new Unit( footEquivalentOfMile, foot ) );
    });

});

describe( "Negative test cases :: withing Length class :: ", () => {

    test( `Convert ${ randomNumber }  length unit to temperature unit ::`, () => {

        const mileFactors: IUnitFactors = {
            multiplicationFactor: 63360,
            additionFactor: 0
        };

        const fahrenheitFactors = {
            multiplicationFactor: ( 9 / 5 ),
            additionFactor: 32
        };

        const mile = new MetricType( "Mile", mileFactors );
        const fahrenheit = new MetricType( "F", fahrenheitFactors );

        expect( new Unit( randomNumber, mile ).in( fahrenheit ) ).toThrow( " UnitType mismatch " );

    })

})