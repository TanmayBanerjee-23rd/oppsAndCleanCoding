import { MetricType } from "./MetricType";

export class Unit {

    private readonly value: number;
    private readonly metrictype: MetricType;
    
    constructor( value: number, metrictype: MetricType ) {
        this.value = value;
        this.metrictype = metrictype;
    };
    
    in( toUnitMetricType: MetricType ): Unit {

        return new Unit( toUnitMetricType.amountsFrom( this.metrictype.inBaseUnits( this.value ) ), toUnitMetricType );
    };
}