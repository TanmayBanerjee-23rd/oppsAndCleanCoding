import { legType } from "../utilities/types/GraphNode";

export class Route {
    
    private legs : legType[] = [];
    
    public static readonly deadEnd: Route = new class extends Route{

        legsCount(): number {
            return Infinity; // considering it will take inifinity number of legs from the deadEnd to reach the destination node.
        };

        totalLegsWeight(): number {
            return Infinity;
        };

        traverse(): string {
            return `No routes found to reach destination.`;
        };
    };

    addLeg( leg: legType ): void {
        this.legs.push( leg );
    };

    legsCount(): number {
        return this.legs.length;
    };

    totalLegsWeight() {
        return this.legs.reduce( ( totalLegsWeight: number, connectingPart: legType ): number => {
            
            totalLegsWeight += connectingPart.edgeWeight;
            return totalLegsWeight;
        }, 0 );
    };

    traverse( sourceNodeName: string ): string {
        return this.legs.reverse().reduce( ( fullPathToDestination: string, routeLeg: legType ): string => {
            console.log( fullPathToDestination, routeLeg );
            fullPathToDestination = fullPathToDestination.concat( ` -> ${ routeLeg.vertex.getName() }` );
            return fullPathToDestination;
        }, sourceNodeName );
    };
};