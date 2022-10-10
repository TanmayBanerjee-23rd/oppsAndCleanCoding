import { faker } from "@faker-js/faker";
import { UNIT_TYPE } from "../../enums/unitEnums";
import { IUnitFactors } from "../../interfaces/UnitLab";
import { MetricType } from "../MetricType";
import { Unit } from "../Unit";

describe( "Positive test cases :: Temperature type conversions :: ", () => {

    let randomNumber: number = faker.datatype.number();
    
    const celciousFactors : IUnitFactors= {
        multiplicationFactor: 1,
        additionFactor: 0
    };

    let kelvinFactors: IUnitFactors = {
        multiplicationFactor: 1,
        additionFactor: -273.15
    };

    // always goes with any other Unit as the factors have to change in order to convert into the base Unit celcious.
    let fahrenheitFactors: IUnitFactors;

    test( `Conversion from ${ randomNumber } celcius to equivalent fahrenheit :: `, () => {

        fahrenheitFactors = {
            multiplicationFactor: ( 9 / 5 ),
            additionFactor: 32
        };

        const equivalentFahrenheitVal = ( randomNumber * fahrenheitFactors.multiplicationFactor ) + fahrenheitFactors.additionFactor;

        const celcious = new MetricType( UNIT_TYPE.TEMPERATURE, "C", celciousFactors );
        const fahrenheit = new MetricType( UNIT_TYPE.TEMPERATURE, "F", fahrenheitFactors );

        expect( new Unit( randomNumber, celcious ).in( fahrenheit ) ).toEqual( new Unit( equivalentFahrenheitVal, fahrenheit ) );
    });

    test( `Conversion from ${ randomNumber } fahrenheit to equivalent celcius :: `, () => {

        fahrenheitFactors = {
            multiplicationFactor: ( 5 / 9 ),
            additionFactor: -32
        };

        const equivalentCelciousVal = ( randomNumber + fahrenheitFactors.additionFactor ) * fahrenheitFactors.multiplicationFactor;

        const fahrenheit = new MetricType( UNIT_TYPE.TEMPERATURE, "F", fahrenheitFactors );
        const celcious = new MetricType( UNIT_TYPE.TEMPERATURE, "C", celciousFactors );

        expect( new Unit( randomNumber, fahrenheit ).in( celcious ) ).toEqual( new Unit( equivalentCelciousVal, celcious ) );
    });

    test( `Conversion from ${ randomNumber } kelvin to equivalent celcius :: `, () => {

        const equivalentCelciousVal = ( randomNumber + kelvinFactors.additionFactor ) * kelvinFactors.multiplicationFactor;

        const kelvin = new MetricType( UNIT_TYPE.TEMPERATURE, "K", kelvinFactors );
        const celcious = new MetricType( UNIT_TYPE.TEMPERATURE, "C", celciousFactors );

        expect( new Unit( randomNumber, kelvin ).in( celcious ) ).toEqual( new Unit( equivalentCelciousVal, celcious ) );
    });
})