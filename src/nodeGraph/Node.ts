import { Relation } from "./Relation";

export class Node {

    private readonly name: string;
    private readonly relations: Relation[];

    createRelationTo( node: Node, edgeWight: number ) {
        this.relations.push( new Relation( node, edgeWight ) );
    }
}