const numToStringConverter = require( "number-to-words" );
const pluralizer = require( "pluralize" );

export class Duration {

    private readonly timeUnitToMilisecondsMapper = [
        [ "decade", 315360000000 ],
        [ "year", 31536000000 ],
        [ "week", 604800000 ],
        [ "day", 86400000 ],
        [ "hour", 3600000 ],
        [ "minute", 60000 ],
        [ "second", 1000 ]
    ]

    since( startTime: Date, endTime: Date ): string {

        const startTimeInMiliseconds = startTime.getTime();
        const endTimeInMiliseconds = endTime.getTime();
        
        const deltaInMiliSeconds = endTimeInMiliseconds - startTimeInMiliseconds;

        for ( let entry of this.timeUnitToMilisecondsMapper ) {

            if ( deltaInMiliSeconds < entry[ 1 ] ) continue;

            const deltaInMultiplesOfHighestUnitLevel = ( deltaInMiliSeconds / ( entry[ 1 ] as number ) ); 

            if ( deltaInMultiplesOfHighestUnitLevel > 0 ) {
                console.log( deltaInMiliSeconds, deltaInMultiplesOfHighestUnitLevel, entry );

                return `${ numToStringConverter.toWords( deltaInMultiplesOfHighestUnitLevel ) } ${ pluralizer( entry[ 0 ] , Math.floor( deltaInMultiplesOfHighestUnitLevel ) ) } ago`;
            }
        }   

    };
}