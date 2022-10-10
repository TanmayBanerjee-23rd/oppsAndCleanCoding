import { Ishape } from "../interfaces/IShape";
import { Rectangle } from "./Rectangle";

export class Square implements Ishape {

    private readonly rect: Ishape; // avoiding inheritance

    constructor( edgeWeigth: number, unit: string ) {

        if ( !edgeWeigth || !unit ) {
            throw new Error( "Required arguments missing while constructing square object." );
        }

        this.rect = new Rectangle( edgeWeigth, edgeWeigth, unit );
    };

    area(): string {
        return this.rect.area();
        // return `${ Math.pow( this.edgeWeigth, 2 ) } square ${ this.unit }` ;
    };

    perimeter(): string {
        return this.rect.perimeter();
        // return `${ ( 4 * this.edgeWeigth ) } ${ this.unit }`;
    };
}
