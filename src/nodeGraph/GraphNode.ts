import { legType } from "../utilities/types/GraphNode";
import { Route } from "./Route";

export class GraphNode {

    private readonly name: string;
    private connectingLegs: legType[] = [];

    constructor( name: string ) {
        this.name = name;
    };

    getName(): string {
        return this.name;
    };

    createLeg( leg: legType ) {
        this.connectingLegs.push( leg );
    };

    createLegs( legs: legType[] ) {

        this.connectingLegs.push( ...legs );
    };

    findShortestRouteTo( targetNode: GraphNode ): string {
        return this.reccuringDepthFirstSearch( targetNode, [], this.calculateRouteLegsCount ).traverse( this.name );
    };

    findCheapestRouteTo( targetNode: GraphNode ) {
        return this.reccuringDepthFirstSearch( targetNode, [], this.calculateRouteLegsCost ).traverse( this.name );
    };

    reccuringDepthFirstSearch( targetNode: GraphNode, visitedNodes: GraphNode[], comparisionCriteria: Function ): Route {
        
        if ( this.name === targetNode.name ){
            return new Route(); 
        }

        if ( this.connectingLegs.length === 0 ) return Route.deadEnd;

        visitedNodes.push( this );

        let optimalRoute: Route = Route.deadEnd;
        const currentVisitedNodes = [ ...visitedNodes ];

        for (const leg of this.connectingLegs ) {
            
            if ( visitedNodes.find( node => node === leg.vertex ) ) continue;
    
            const subRoute = leg.vertex.reccuringDepthFirstSearch( targetNode, visitedNodes, comparisionCriteria );
    
            if ( subRoute !== Route.deadEnd ) {
                subRoute.addLeg( leg );
            }

            if ( comparisionCriteria( optimalRoute ) > comparisionCriteria( subRoute ) ) {
                optimalRoute = subRoute;
            }

            visitedNodes = currentVisitedNodes;
        }

        return optimalRoute;
        
    };

    calculateRouteLegsCount( route: Route ): number {
        return route.legsCount();
    };

    calculateRouteLegsCost( route: Route ): number {
        return route.totalLegsWeight();
    };
};


export const createNodes = ( names: string[] ) => {
   return names.map( name => new GraphNode( name ) );
}