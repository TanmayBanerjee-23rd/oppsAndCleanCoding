import { Duration } from "../Duration";

const dateGenerator = require( "random-date-generator" );

describe( " Positive test cases :: Calculate duration between two time stamps ", () => {

    let currentTS: Date;
    const durationInstance = new Duration();

    beforeEach( () => {
        currentTS = new Date();
    });

    test( " Duration should be one second ago :: ", () => {

        const secondsAgoTSFromCurrentTS = new Date( currentTS );
        secondsAgoTSFromCurrentTS.setSeconds( currentTS.getSeconds() - 1 );

        expect( durationInstance.since( secondsAgoTSFromCurrentTS, currentTS ) ).toEqual( "one second ago" );
    });

    test( " Duration should be ten seconds ago :: ", () => {

        const secondsAgoTSFromCurrentTS = new Date( currentTS );
        secondsAgoTSFromCurrentTS.setSeconds( currentTS.getSeconds() - 10 );

        expect( durationInstance.since( secondsAgoTSFromCurrentTS, currentTS ) ).toEqual( "ten seconds ago" );
    });

    test( " Duration should be one minute ago :: ", () => {

        const secondsAgoTSFromCurrentTS = new Date( currentTS );
        secondsAgoTSFromCurrentTS.setMinutes( currentTS.getMinutes() - 1 );

        expect( durationInstance.since( secondsAgoTSFromCurrentTS, currentTS ) ).toEqual( "one minute ago" );
    });

    test( " Duration should be five years ago :: ", () => {

        const secondsAgoTSFromCurrentTS = new Date( currentTS );
        secondsAgoTSFromCurrentTS.setFullYear( currentTS.getFullYear() - 5 );

        expect( durationInstance.since( secondsAgoTSFromCurrentTS, currentTS ) ).toEqual( "five years ago" );
    });

    test( " Duration should be one year ago :: ", () => {

        const secondsAgoTSFromCurrentTS = new Date( currentTS );
        secondsAgoTSFromCurrentTS.setFullYear( currentTS.getFullYear() - 1 );

        expect( durationInstance.since( secondsAgoTSFromCurrentTS, currentTS ) ).toEqual( "one year ago" );
    });

    test( " Duration should be one decade ago :: ", () => {

        const secondsAgoTSFromCurrentTS = new Date( currentTS );
        secondsAgoTSFromCurrentTS.setFullYear( currentTS.getFullYear() - 10 );

        expect( durationInstance.since( secondsAgoTSFromCurrentTS, currentTS ) ).toEqual( "one decade ago" );
    });
})