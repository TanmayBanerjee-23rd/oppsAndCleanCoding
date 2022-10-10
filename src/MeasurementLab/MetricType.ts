import { UNIT_TYPE } from "../enums/unitEnums";
import { IUnitFactors } from "../interfaces/UnitLab";

export class MetricType {
    
    private readonly name: string;
    private readonly unitFactors: IUnitFactors;
    unitType: UNIT_TYPE;
    
    constructor( unitType: UNIT_TYPE, name: string, unitFactors: IUnitFactors ) {
        this.unitType = unitType;
        this.name = name;
        this.unitFactors = unitFactors;
    };
    
    inBaseUnits( value: number ): number {
    
        return ( ( value + this.unitFactors.additionFactor ) * this.unitFactors.multiplicationFactor );
    };
    
    amountsFrom( valueInBaseUnits: number, toUnitMetricType: MetricType ): number {
        
        if ( this.unitType !== toUnitMetricType.unitType ) {
            throw new Error( " UnitType mismatch " );
        }

        return ( ( valueInBaseUnits * this.unitFactors.multiplicationFactor ) + this.unitFactors.additionFactor );
    };
}