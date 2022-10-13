import { Node } from "./Node";

export class Relation {

    private readonly vertex: Node;
    private readonly edgeWieght: number;

    constructor( node: Node, edgeWight: number ) {
        
        this.vertex = node;
        this.edgeWieght = edgeWight;
    }

    
}