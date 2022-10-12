import { Ishape } from "../utilities/interfaces/IShape";

export class Rectangle implements Ishape {

    private readonly length: number = 0;
    private readonly breadth: number = 0;
    private readonly unit: string = "";

    constructor( length: number, breadth: number, unit: string ) {

        if ( !length || !breadth || !unit ) {
            throw new Error( "Required arguments missing while constructing rectangle object." );
        }

        this.length = length;
        this.breadth = breadth;
        this.unit = unit;
    };

    area(): string {
        return `${ this.length * this.breadth } square ${ this.unit }` ;
    };

    perimeter(): string {
        return `${ ( 2 * ( this.length + this.breadth ) ) } ${ this.unit }`;
    };

    scaleLengthWise( percentageScaleFactor: number ): Rectangle {
        return new Rectangle( this.length + ( percentageScaleFactor / 100 ), this.breadth, this.unit );
    }
};
