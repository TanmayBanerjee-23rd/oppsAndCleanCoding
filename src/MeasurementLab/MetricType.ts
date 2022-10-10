import { IUnitFactors } from "../interfaces/UnitLab";

export class MetricType {
    
    private readonly name: string;
    private readonly unitFactors: IUnitFactors;
    
    constructor( name: string, unitFactors: IUnitFactors ) {
        this.name = name;
        this.unitFactors = unitFactors;
    };
    
    inBaseUnits( value: number ): number {
    
        return ( ( value + this.unitFactors.additionFactor ) * this.unitFactors.multiplicationFactor );
    };
    
    amountsFrom( valueInBaseUnits: number ): number {
    
        return ( ( valueInBaseUnits * this.unitFactors.multiplicationFactor ) + this.unitFactors.additionFactor );
    };
}